import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessageService} from "../../../../core/services/message.service";
import {LibraryMemberCard} from "../../../../../models/library-member.model";
import {Message, MessageSenderDTO} from "../../../../../models/admin/message.model";
import {UserState} from "../../../../core/states/user/user.state";
import {Store} from "@ngxs/store";
import {ToastService} from "ng-uikit-pro-standard";

@Component({
  selector: 'app-chat',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss']
})
export class MessagePage implements OnInit {
  @ViewChild('conversationList') private conversationList: ElementRef;

  senders: MessageSenderDTO[];
  conversation: Message[];
  librarian: string;
  member: LibraryMemberCard;
  message: string;

  constructor(private messageService: MessageService, private _store: Store, private toastService: ToastService) {
  }

  ngOnInit(): void {
    const memberLibrary = this._store.selectSnapshot(UserState.library);
    this.librarian = 'bibliotekar@' + memberLibrary;                        // todo: da li je samo za bgb?
    this.loadMembers();
  }

  loadMembers() {
    this.messageService.getSenders().subscribe(senders => {
      this.senders = senders;
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.conversationList.nativeElement.scrollTop = this.conversationList.nativeElement.scrollHeight;
    } catch (err) {
    }
  }

  getMessagesByUsername(member: MessageSenderDTO): void {
    this.conversation = [];
    this.member = null;
    this.messageService.getMessagesByUsername(member.memberCardDTO.username).subscribe(messages => {
      this.conversation = messages;
      this.member = member.memberCardDTO;
      member.message = messages[messages.length - 1];
    })
  }

  sendMessage(): void {
    if (this.message) {
      const newMessage = this.createNewMessage();
      this.messageService.sendMessage(newMessage).subscribe(savedMessage => {
        this.conversation.push(savedMessage);
        this.message = "";
        this.updateSendersList(newMessage);    // todo: da li pozivati svaki put ili samo push i reorder
      }, () => this.toastService.error("Дошло је до грешке приликом слања поруке. Покушајте поново"));
    }
  }

  updateSendersList(newMessage: Message) {
    const idx = this.senders.findIndex(item => item.memberCardDTO === this.member);
    if (idx !== -1) {
      const currentSMember = {...this.senders[idx]};
      currentSMember.message = newMessage;
      this.deleteFromArray(idx);
      this.senders.unshift(currentSMember);
    }
  }

  deleteFromArray(idx: number) {
    if (idx !== -1) {
      this.senders.splice(idx, 1);
      this.senders = [...this.senders]
    }
  }

  createNewMessage(): Message {
    const newMessage = new Message();
    newMessage.idReceiver = this.member.username;
    newMessage.idSender = this.librarian;
    newMessage.content = this.message;
    newMessage.date = new Date();
    newMessage.seen = true;
    return newMessage;
  }
}
