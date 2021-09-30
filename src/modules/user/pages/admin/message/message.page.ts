import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessageService} from "../../../../core/services/message.service";
import {LibraryMemberCard} from "../../../../../models/library-member.model";
import {Message, MessageDTO, MessageSenderDTO} from "../../../../../models/admin/message.model";
import {Store} from "@ngxs/store";
import {ToastService} from "ng-uikit-pro-standard";
import {UserState} from "../../../../core/states/user/user.state";

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss']
})
export class MessagePage implements OnInit {
  @ViewChild('conversationList') private conversationList: ElementRef;

  senders: MessageSenderDTO[];
  conversation: MessageDTO[];
  member: LibraryMemberCard;
  loggedAdmin: string;
  message: string;
  loading: boolean;

  constructor(private messageService: MessageService, private _store: Store, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.loggedAdmin = this._store.selectSnapshot(UserState.username);
    this.loadSenders();
  }

  loadSenders() {
    this.conversation = [];
    this.member = null;
    this.messageService.getSenders().subscribe(senders => {
      this.senders = senders;
      this.loading = false;
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
      member.message = messages[messages.length - 1].message;
    })
  }

  sendMessage(): void {
    if (this.message) {
      const newMessage = this.createNewMessage();
      this.messageService.sendMessage(newMessage).subscribe(savedMessage => {
        this.conversation.push(savedMessage);
        this.message = "";
        this.updateSendersList(newMessage);
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
    newMessage.idSender = this.loggedAdmin;
    newMessage.content = this.message;
    newMessage.date = new Date();
    newMessage.seen = true;
    return newMessage;
  }
}
