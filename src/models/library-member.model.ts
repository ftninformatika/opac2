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
}

export interface ILoginDto {
  username: string;
  password: string;
}

export enum EAuthority {
  LibraryMember = 'ROLE_USER',
  LibraryAdmin = 'ROLE_ADMIN'
}
