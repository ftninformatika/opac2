import { ISigningModel } from './signing.model';
import { IDuplicateModel } from './duplicate.model';
import { IMembershipTypeModel } from './membership-type.model';
import { IUserCategoryModel } from './user-category.model';

export enum EGender {
  MALE = 'M',
  FEMALE = 'F'
}

export enum EAge {
  ADULT = 'A',
  CHILD = 'C'
}

export interface IUserModel {
  _id?: string;
  organization?: any;
  language?: string;
  educationLevel?: string;
  membershipType?: IMembershipTypeModel;
  userCategory?: IUserCategoryModel;
  userId: string;
  firstName: string;
  lastName: string;
  parentName?: string;
  address?: string;
  city?: string;
  zip?: string;
  phone?: string;
  email: string; // This is username
  password?: string;
  jmbg?: string;
  birthday?: Date;
  docId?: number;
  docNo?: string;
  docCity?: string;
  country?: string;
  gender?: EGender;
  age?: EAge;
  secAddress?: string;
  secZip?: string;
  secCity?: string;
  secPhone?: string;
  note?: string;
  interests?: string;
  occupation?: string;
  indexNo?: string;
  blockReason?: string;
  signings?: ISigningModel[];
  duplicates?: IDuplicateModel[];
}
