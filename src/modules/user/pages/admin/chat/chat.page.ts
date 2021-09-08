import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../../../core/services/message.service";
import {LibraryMemberCard} from "../../../../../models/library-member.model";
import {Message, MessageSenderDTO} from "../../../../../models/admin/message.model";
import {DateUtils} from "../../../../../utils/date.utils";
import {UserState} from "../../../../core/states/user/user.state";
import {Store} from "@ngxs/store";
import {ToastService} from "ng-uikit-pro-standard";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {
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

    this.messageService.getSenders().subscribe(senders => {
      this.senders = senders;
    });
  }

  getMessagesByUsername(member: LibraryMemberCard): void {
    this.conversation = [];
    this.member = null;
    this.messageService.getMessagesByUsername(member.username).subscribe(messages => {
      this.conversation = messages;
      this.member = member;
    })
  }

  sendMessage(): void {
    if (this.message) {
      const newMessage = this.createNewMessage();
      this.messageService.sendMessage(newMessage).subscribe(savedMessage => {
        this.conversation.push(savedMessage);
        this.message = "";
      }, () => this.toastService.error("Дошло је до грешке приликом слања поруке. Покушајте поново"));
    }
  }

  createNewMessage(): Message {
    const newMessage = new Message();
    newMessage.idReceiver = this.member.username;
    newMessage.idSender = this.librarian;
    newMessage.content = this.message;
    newMessage.date = new Date();
    return newMessage;
  }
}
