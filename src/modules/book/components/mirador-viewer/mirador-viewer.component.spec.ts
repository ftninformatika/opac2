import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiradorViewerComponent } from './mirador-viewer.component';

describe('MiradorViewerComponent', () => {
  let component: MiradorViewerComponent;
  let fixture: ComponentFixture<MiradorViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiradorViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiradorViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
