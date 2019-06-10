import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMainPage } from './search-main.page';

describe('SearchMainPage', () => {
  let component: SearchMainPage;
  let fixture: ComponentFixture<SearchMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMainPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
