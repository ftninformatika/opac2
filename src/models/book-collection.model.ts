export interface BookCollectionModel {
  _id?: string;
  creatorUsername: string;
  creationDate?: Date;
  lastModified?: Date;
  bookIds: string[];
}
