import { TestBed } from '@angular/core/testing';

import { NgxTranslateInService } from './ngx-translate-in.service';

describe('NgxTranslateInService', () => {
  let service: NgxTranslateInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTranslateInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
