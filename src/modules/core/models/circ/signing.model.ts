export interface ISigningModel {
  signDate: Date;
  untilDate: Date;
  librarian: string;
  cost: number;
  receipt?: string;
  location: string;
}
