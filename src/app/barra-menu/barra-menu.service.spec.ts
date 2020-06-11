import { TestBed } from '@angular/core/testing';

import { BarraMenuService } from './barra-menu.service';

describe('BarraMenuService', () => {
  let service: BarraMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarraMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
