import { TestBed, inject } from '@angular/core/testing';

import { TecnicoService } from './funcionario.service';

describe('TecnicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TecnicoService]
    });
  });

  it('should be created', inject([TecnicoService], (service: TecnicoService) => {
    expect(service).toBeTruthy();
  }));
});
