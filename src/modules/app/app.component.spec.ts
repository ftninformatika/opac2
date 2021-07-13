import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppPage } from './pages/app/app.page';

describe('AppPage', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppPage
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'opac2'`, () => {
    const fixture = TestBed.createComponent(AppPage);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('opac2');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppPage);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to opac2!');
  });
});
