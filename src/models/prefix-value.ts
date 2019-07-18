export interface IPrefixValue {
  prefName: string;
  value: string;
}

export enum EAutoCompletePrefixes {
  AUTHORS = 'authors',
  PUBLISHERS = 'publishers',
  KEYWORDS = 'keywords',
  TITLES = 'titles'
}
