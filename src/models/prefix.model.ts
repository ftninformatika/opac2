export interface PrefixModel {
  code: string;
  name: string;
  coder?: Coder[];
}

export interface Coder {
  code: string;
  name: string;
}
