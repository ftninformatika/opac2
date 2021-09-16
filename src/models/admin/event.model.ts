export class Event {
  _id?: string;
  date?: Date;
  content?: string;
  title?: string;
  image?: string | ArrayBuffer;
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
