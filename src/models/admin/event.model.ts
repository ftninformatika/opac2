export class Event {
  _id?: string;
  date?: Date;
  time?: string;
  content?: string;
  title?: string;
  image?: string | ArrayBuffer;
  location?: string;
  link?: string;
  linkName?: string;
}

export class EventFilter {
  from?: Date;
  to?: Date;
  searchText?: string;
}

export const IEventFilter: EventFilter = {
  from: null,
  to: null,
  searchText: ''
};
