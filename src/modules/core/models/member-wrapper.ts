import { ILibraryMember } from './library-member.model';
import { IUserModel } from './circ/user.model';

export interface IMemberWrapper {
  libraryMember: ILibraryMember;
  member: IUserModel;
}
