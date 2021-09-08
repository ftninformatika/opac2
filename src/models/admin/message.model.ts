import {LibraryMemberCard} from "../library-member.model";

export class Message {
  _id?: string;
  idSender?: string;
  idReceiver?: string;
  content?: string;
  date?: Date;
}

export class MessageSenderDTO {
  memberCardDTO: LibraryMemberCard;
  message: Message;
}
