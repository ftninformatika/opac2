export interface Book {
  _id?: string; // mongoId of record
  pubType?: EPubType;
  materialType?: string;
  authors?: string[];
  otherAuthors?: string[];
  title: string;
  subtitle?: string;
  publisher?: string;
  publishYear?: string;
  publishPlace?: string;
  isbn?: string;
  issn?: string;
  pagesCount?: string;
  dimensions?: string;
  notes?: string;
  udk?: string;
  imageUrl?: string;
  description?: string;
  useBookCommonUid: boolean;
  isbdHtml?: string;
  items?: RecordItem[];
  record?: Record;
  commonBookUID?: BigInteger;
  reservations?: ReservationInQueue[];
  totalRatings?: number;
  avgRating?: AvgRecordRating;
  refRecsBrief?: any;
  digitalUrls?: string[];
}

export interface BookCommon {
  _id?: string;
  uid?: BigInteger;
  title?: string;
  isbn?: string;
  issn?: string;
  imageUrl?: string;
  description?: string;
  record_id?: string;
  useBookCommonUid: boolean;
}

export interface RecordItem {
  location: string;
  locCode: string;
  signature: string;
  status: ERecordItemStatus;
  googleMapLocationURL?: string;
  invNum: string;
  volume?: string;
  year?: string;
  number?: string;
  serial: boolean;
}

export interface RecordRating {
  username: string;
  libraryMemberId: string;
  givenRating: number;
}

export interface AvgRecordRating {
  avgRating: number;
  totalRates: number;
}

export interface Reservation {
  _id: string;
  record_id: string;
  isBookPickedUp: boolean;
  reservationDate: Date;
  title: string;
  authors: [];
  reservationStatus: ReservationStatus;
  pickUpDeadline: Date;
  locationDescription: string;
  locationCode: string;
}

export interface ReservationInQueue {
  _id: string;
  reservationDate: Date;
  pickUpDeadline: Date;
  coderId: string;
  userId: string;
}

export enum EPubType {
  Monograph = 1,
  Serial = 2
}

export enum ReservationStatus {
  WaitingInQueue = 'WAITING_IN_QUEUE',
  AssignedBook = 'ASSIGNED_BOOK',
  PickedUp = 'PICKED_UP'
}

export enum ERecordItemStatus {
  Borrowed = 'BORROWED',
  Free = 'FREE',
  Reserved = 'RESERVED',
  NotLendable = 'NOT_LENDABLE',
  NotShowable = 'NOT_SHOWABLE'
}

export class Record {
  _id: string;
  commonBookUid?: number;
  rn: number;
  fields?: Field[];
  primerci?: Primerak[];
  godine?: Godina[];
  recordRatings?: RecordRating[];
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
