export interface Book {
  id: number;
  title: string;
  subtitle?: string;
  authors?: string[];
  imageUrl?: string;
  publisher?: string;
  year?: number;
}

export interface Record {
  id: number;
  fields?: Field[];
  primerci?: Primerak[];
}

export interface Field {
  name: string;
  ind1: string;
  ind2: string;
  subfields?: Subfield[];
}

export interface Subfield {
  name: string;
  content?: string;
  secondaryField?: Field;
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
