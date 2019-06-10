import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPage } from './book.page';

describe('BookCardComponent', () => {
  let component: BookPage;
  let fixture: ComponentFixture<BookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
