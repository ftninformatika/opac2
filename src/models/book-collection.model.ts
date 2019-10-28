export interface BookCollectionModel {
  _id?: string;
  index: number;
  title: string;
  creatorUsername: string;
  creationDate?: Date;
  lastModified?: Date;
  recordsIds: string[];
  showCollection?: boolean;
}
