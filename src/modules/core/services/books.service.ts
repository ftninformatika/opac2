import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';
import { ILendingViewModel } from '../models/circ/lending/lending-view.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  lendings: ILendingViewModel[] = [
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    }
  ];

  books: Book[] = [
    {
      id: 1,
      title: 'Fred The Lonely Monster',
      authors: ['Anne Lowinsky'],
      // imageUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png',
      publisher: 'Create Media',
      year: 2019,
    }, {
      id: 2,
      title: 'The World of Abstract Art',
      authors: ['Emily Robbins'],
      imageUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png',
      publisher: 'Create Media',
      year: 2019,
    }, {
      id: 3,
      title: 'Making Things Happen',
      subtitle: 'Pursuing the Creative Life Without Quitting Your Day Job',
      authors: ['Elizabeth Murphy'],
      imageUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/business_bookcover.png',
      publisher: 'Create Media',
      year: 2019,
    }, {
      id: 4,
      title: 'Franchise Bible',
      subtitle: 'How to Buy a Franchise or Franchise Your Own Business',
      authors: ['Rick Grossman', 'Michael J. Katz'],
      imageUrl: 'https://bookstore.entrepreneur.com/wp-content/uploads/2016/11/9781613083550-frontcover.jpg',
      publisher: 'Enterpreneur',
      year: 2019,
    }, {
      id: 5,
      title: 'The Purple Book',
      subtitle: 'Biblical Foundations for Building Strong Disciples',
      authors: ['Rice Brooks', 'Steve Murrell'],
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51huB7J1pAL._SX326_BO1,204,203,200_.jpg',
      publisher: 'Zondervan',
      year: 2017,
    }, {
      id: 6,
      title: 'Norse Mythology',
      authors: ['Neil Gaiman'],
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://pro2-bar-s3-cdn-cf3.myportfolio.com/560d16623f9c2df9615744dfab551b3d/e50c016f-b6a8-4666-8fb8-fe6bd5fd9fec_rw_1920.jpeg?h=dc627898fc5eac88aa791fb2b124ecbd',
      publisher: 'W.W. Norton',
      year: 2017,
    }, {
      id: 7,
      title: 'The CEO Who Lost His Head',
      authors: ['Aditya Sinha'],
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://www.ishankhosla.com/sites/default/files/styles/masonry200width/public/book-cover-design-india-18-06-2017.jpg?itok=krCrtN14',
      publisher: 'PAN',
      year: 2016,
    }, {
      id: 8,
      title: 'Fatherland',
      authors: ['Robert Harris'],
      imageUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0995/9780099527893.jpg',
      publisher: 'Cornerstone',
      year: 2009,
    }, {
      id: 101,
      title: 'Collapse',
      subtitle: 'How Societies Choose to Fail or Succeed',
      authors: ['Jared Diamong'],
      imageUrl: 'https://secure.syndetics.com/index.aspx?isbn=9780143117001/MC.GIF&client=sepup&type=xw12&oclc=',
      publisher: 'Penguin Books',
      year: 2011,
    }, {
      id: 102,
      title: 'The Art Instinct',
      subtitle: 'Beauty, Pleasure, & Human Evolution',
      authors: ['Denis Dutton'],
      imageUrl: 'https://secure.syndetics.com/index.aspx?isbn=9781596914018/MC.GIF&client=sepup&type=xw12&oclc=',
      publisher: 'Bloomsbury Press',
      year: 2009,
    }, {
      id: 103,
      title: 'The Human Tide',
      subtitle: 'How Population Shaped the Modern World',
      authors: ['Paul Morland'],
      imageUrl: 'https://secure.syndetics.com/index.aspx?isbn=9781541788367/MC.GIF&client=sepup&type=xw12&oclc=',
      publisher: 'Public Affairs',
      year: 2019,
    }, {
      id: 104,
      title: 'Foragers, Farmers, and Fossil Fuels',
      subtitle: 'How Human Values Evolve',
      authors: ['Ian Morris'],
      imageUrl: 'https://secure.syndetics.com/index.aspx?isbn=9780691160399/MC.GIF&client=sepup&type=xw12&oclc=',
      publisher: 'Princeton University Press',
      year: 2015,
    }, {
      id: 105,
      title: 'The Blank Slate',
      subtitle: 'The Modern Denial of Human Nature',
      authors: ['Steven Pinker'],
      imageUrl: 'https://secure.syndetics.com/index.aspx?isbn=9780142003343/MC.GIF&client=sepup&type=xw12&oclc=',
      publisher: 'Penguin Books',
      year: 2016,
    }, {
      id: 106,
      title: 'Genesis',
      subtitle: 'The Deep Origin of Societies',
      authors: ['Edward Wilson'],
      imageUrl: 'https://secure.syndetics.com/index.aspx?isbn=9781631495540/MC.GIF&client=sepup&type=xw12&oclc=',
      publisher: 'Liveright Publishing Corporation',
      year: 2019,
    }, {
      id: 107,
      title: 'The Human Swarm',
      subtitle: 'How Our Societies Arise, Thrive, and Fall',
      authors: ['Mark Moffett'],
      imageUrl: 'https://secure.syndetics.com/index.aspx?isbn=9780465055685/MC.GIF&client=sepup&type=xw12&oclc=',
      publisher: 'Basic Books',
      year: 2019,
    }, {
      id: 108,
      title: 'The History of the World in 100 Objects',
      authors: ['Neil MacGregor'],
      imageUrl: 'https://secure.syndetics.com/index.aspx?isbn=9780670022700/MC.GIF&client=sepup&type=xw12&oclc=',
      publisher: 'Viking',
      year: 2011,
    }, {
      id: 201,
      title: 'Sapiens',
      subtitle: 'A Brief History of Humankind',
      authors: ['Yuval Noah Harari'],
      imageUrl: 'http://static.harpercollins.com/harperimages/isbn/large/7/9780062316097.jpg',
      publisher: 'Harper Collins',
      year: 2015,
    }, {
      id: 202,
      title: 'Homo Deus',
      subtitle: 'A Brief History of Tomorrow',
      authors: ['Yuval Noah Harari'],
      imageUrl: 'https://secure.syndetics.com/index.aspx?isbn=9780062464316/MC.GIF&client=sepup&type=xw12&oclc=',
      publisher: 'Harper Collins',
      year: 2017,
    }, {
      id: 203,
      title: '21 Lessons for the 21st Century',
      authors: ['Yuval Noah Harari'],
      imageUrl: 'https://secure.syndetics.com/index.aspx?isbn=9780525512172/MC.GIF&client=sepup&type=xw12&oclc=',
      publisher: 'Spiegel & Grau',
      year: 2018,
    }
  ];

  newBooks: Book[];
  recommendedBooks: Book[];
  searchHits: Book[];

  constructor() {
    this.newBooks = this.books.filter(book => book.id < 100);
    this.recommendedBooks = this.books.filter(book => book.id > 100 && book.id < 200);
    this.searchHits = this.books.filter(book => book.id > 200);
  }

  public getNewBooks(): Book[] {
    return this.newBooks;
  }

  public getRecommendedBooks(): Book[] {
    return this.recommendedBooks;
  }

  public simpleSearch(query: string): Observable<Book[]> {
    return of(this.searchHits);
  }

  public getBookById(id: number): Observable<Book> {
    return of(this.books.find(book => book.id === id));
  }

  public search(query: any[]): Observable<Book[]> {
    return of(this.searchHits);
  }

  public getAllBooks(): Observable<Book[]> {
    return of(this.books);
  }

  public getDummyLendingViews(): ILendingViewModel[] {
    return this.lendings;
  }
}
