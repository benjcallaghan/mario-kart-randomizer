import { TestBed, inject } from '@angular/core/testing';

import { MarioService } from './mario.service';

describe('MarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarioService]
    });
  });

  it('should be created', inject([MarioService], (service: MarioService) => {
    expect(service).toBeTruthy();
  }));
});
