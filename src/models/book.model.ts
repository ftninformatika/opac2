export interface Book {
  id?: number; // remove
  _id?: string; // mongoId of record
  pubType?: EPubType; // make this mandatory?
  authors?: string[];
  title: string;
  subtitle?: string;
  publisher?: string;
  publishYear?: string;
  publishPlace?: string;
  isbn?: string;
  issn?: string;
  pagesCount?: string;
  dimensions?: string;
  imageUrl?: string;
  description?: string;
  record?: Record;
  year?: number; // remove this
}

export enum EPubType {
  Monograph = 1,
  Serial = 2
}

export interface Record {
  _id: string;
  id?: number; // TODO: ovo ukloniti
  commonBookUid?: number;
  rn: number;
  fields?: Field[];
  primerci?: Primerak[];
  godine?: Godina[];
}

export interface Godina {
  godinaID?: number;
  invBroj: string;
  datumRacuna?: Date;
  dobavljac?: string;
  cena?: number;
  finansijer?: string;
  datumInventarisanja?: Date;
  sigFormat?: string;
  sigPodlokacija?: string;
  sigIntOznaka?: string;
  sigDublet?: string;
  sigNumerusCurens?: string;
  sigNumeracija?: string;
  sigUDK?: string;
  povez?: string;
  nacinNabavke?: string;
  odeljenje?: string;
  napomene?: string;
  godiste?: string;
  godina?: string;
  broj?: string;
  dostupnost?: string;
  inventator?: string;
  sveske?: Sveska[];
}

export interface Sveska {
  sveskaID?: number;
  invBroj?: string;
  status?: string;
  datumStatusa?: Date;
  signatura?: string;
  cena?: number;
  brojSveske?: string;
  knjiga?: string;
  inventator?: string;
}

export interface Field {
  name: string;
  ind1: string;
  ind2: string;
  subfields: Subfield[];
}

export interface Subfield {
  name: string;
  content: string;
  secField: Field;
  subsubfields: Subfield[];
}

export interface Primerak {
  id: number;
  invBroj: string;
  datumRacuna?: Date;
  brojRacuna?: string;
  dobavljac?: string;
  cena?: number;
  finansijer?: string;
  usmeravanje?: string;
  datumInventarisanja?: Date;
  sigFormat?: string;
  sigPodlokacija?: string;
  sigIntOznaka?: string;
  sigDublet?: string;
  sigNumerusCurens?: string;
  sigUDK?: string;
  povez?: string;
  nacinNabavke?: string;
  odeljenje?: string;
  status?: string;
  datumStatusa?: Date;
  inventator?: string;
  dostupnost?: string;
  napomene?: string;
  version?: number;
}
