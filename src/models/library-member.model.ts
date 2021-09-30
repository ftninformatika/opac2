export interface ILibraryMember {
  _id: string;
  username: string;
  password: string;
  libraryPrefix: string;
  index: string;
  activationToken: string;
  profileActivated: boolean;
  authToken?: string;
  authorities: string[];
  myBookshelfBooks?: string[];
}

export interface ILoginDto {
  username: string;
  password: string;
}

export enum EAuthority {
  LibraryMember = 'ROLE_USER',
  LibraryAdmin = 'ROLE_ADMIN'
}

export interface LibraryMemberCard {
  userId?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  membershipUntil?: Date;
  libraryMemberId?: String;
}

export class LoggedUser {
  username: string;
  firstName?: string;
  lastName?: string;
}
