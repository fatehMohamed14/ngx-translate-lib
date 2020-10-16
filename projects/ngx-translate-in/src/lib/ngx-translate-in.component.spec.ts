import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTranslateInComponent } from './ngx-translate-in.component';

describe('NgxTranslateInComponent', () => {
  let component: NgxTranslateInComponent;
  let fixture: ComponentFixture<NgxTranslateInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTranslateInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTranslateInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
