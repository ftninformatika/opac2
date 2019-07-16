export interface ILibraryMember {
  _id: string;
  username: string;
  password: string;
  libraryPrefix: string;
  index: string;
  activationToken: string;
  profileActivated: boolean;
  authToken?: string;
}

export interface ILoginDto {
  username: string;
  password: string;
}
