import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../../../core/services/message.service";
import {LibraryMemberCard} from "../../../../../models/library-member.model";
import {Message} from "../../../../../models/admin/message.model";
import {DateUtils} from "../../../../../utils/date.utils";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {
  senders: LibraryMemberCard[];
  conversation: Message[];
  librarian: string;
  sender: LibraryMemberCard;

  constructor(private messageService: MessageService) {
  }


  ngOnInit(): void {
    this.messageService.getSenders().subscribe(senders => {
      this.senders = senders;
    });
    this.librarian = 'bibliotekar@bgb';
  }

  getMessagesByUsername(sender: LibraryMemberCard) {
    this.conversation = [];
    this.sender = sender;
    this.messageService.getMessagesByUsername(sender.username).subscribe(messages => {
      messages.map(message => message.date = DateUtils.convertUTCtoLocalTime(message.date));
      this.conversation = messages;
    })
  }

  sendMessage() {
  }
}
