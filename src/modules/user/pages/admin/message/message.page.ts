import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessageService} from "../../../../core/services/message.service";
import {LoggedUser} from "../../../../../models/library-member.model";
import {Message, MessageDTO, MessageSenderDTO} from "../../../../../models/admin/message.model";
import {Store} from "@ngxs/store";
import {ToastService} from "ng-uikit-pro-standard";
import {UserState} from "../../../../core/states/user/user.state";
import {interval} from "rxjs";

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss']
})
export class MessagePage implements OnInit {
  @ViewChild('conversationList') private conversationList: ElementRef;

  senders: MessageSenderDTO[];
  conversation: MessageDTO[];
  member: MessageSenderDTO;
  loggedAdmin: LoggedUser;
  message: string;
  loading: boolean;
  tempConversation: MessageDTO[];

  constructor(private messageService: MessageService, private _store: Store, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.setLoggedUser();
    this.loadSenders();
    interval(120000).subscribe(
    // interval(5000).subscribe(
      (val) => {
        this.loadSenders();
        if (this.member) {
          this.refreshConversationList(this.member);
        }
      });
  }

  setLoggedUser(): void {
    this.loggedAdmin = new LoggedUser;
    this.loggedAdmin.username = this._store.selectSnapshot(UserState.username);
    this.loggedAdmin.firstName = this._store.selectSnapshot(UserState.firstname);
    this.loggedAdmin.lastName = this._store.selectSnapshot(UserState.lastname);
  }

  loadSenders() {
    this.messageService.getSenders().subscribe(senders => {
      this.senders = senders;
      this.loading = false;
    });
  }

  getMessagesByUsername(member: MessageSenderDTO): void {
    this.conversation = [];
    this.member = member;
    this.getConversation(member);
  }

  refreshConversationList(member: MessageSenderDTO): void {
    this.getConversation(member);
  }

  getConversation(member: MessageSenderDTO) {
    this.messageService.getMessagesByUsername(member.memberCardDTO.username).subscribe(messages => {
      this.conversation = messages;
      member.message = messages[messages.length - 1].message;
    })
  }

  sendMessage(): void {
    if (this.message) {
      const newMessage = this.createNewMessage();
      this.messageService.sendMessage(newMessage).subscribe(savedMessage => {
        savedMessage = this.convertMessageToMessageDTO(savedMessage);
        this.conversation.push(savedMessage);
        this.message = "";
        this.updateSendersList(newMessage);
      }, () => this.toastService.error("Дошло је до грешке приликом слања поруке. Покушајте поново"));
    }
  }

  convertMessageToMessageDTO(savedMessage: Message): MessageDTO {
    const messageDTO = new MessageDTO();
    messageDTO.message = savedMessage;
    messageDTO.senderFirstname = this.loggedAdmin.firstName;
    messageDTO.senderLastname = this.loggedAdmin.lastName;
    return messageDTO;
  }

  updateSendersList(newMessage: Message) {
    const idx = this.senders.findIndex(item => item.memberCardDTO === this.member.memberCardDTO);
    if (idx !== -1) {
      const currentMember = {...this.senders[idx]};
      currentMember.message = newMessage;
      this.deleteFromArray(idx);
      this.senders.unshift(currentMember);
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
    newMessage.idReceiver = this.member.memberCardDTO.username;
    newMessage.idSender = this.loggedAdmin.username;
    newMessage.content = this.message;
    newMessage.date = new Date();
    newMessage.seen = true;
    return newMessage;
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
}
