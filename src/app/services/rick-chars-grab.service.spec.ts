import { TestBed } from '@angular/core/testing';

import { RickCharsGrabService } from './rick-chars-grab.service';

describe('RickCharsGrabService', () => {
  let service: RickCharsGrabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickCharsGrabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
