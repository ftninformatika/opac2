import { IWarningModel } from './warning.model';

export interface ILendingModel {
  _id?: string;
  userId: string;
  ctlgNo: string;
  librarianLend: string;
  librarianReturn?: string;
  librarianResume?: string;
  lendDate: Date;
  returnDate?: Date;
  resumeDate?: Date;
  deadline?: Date;
  warnings: IWarningModel[];
}


export interface ProlongLendingDTO {
  prolongable: boolean;
  message: string;
  deadline: Date;
  resume: Date;
}
