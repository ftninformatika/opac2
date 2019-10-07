export interface BookCollectionModel {
  _id?: string;
  title: string;
  creatorUsername: string;
  creationDate?: Date;
  lastModified?: Date;
  recordsIds: string[];
  showCollection?: boolean;
}
