import { TestBed } from '@angular/core/testing';

import { CalculaNotaService } from './calcula-nota.service';

describe('CalculaNotaService', () => {
  let service: CalculaNotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculaNotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
