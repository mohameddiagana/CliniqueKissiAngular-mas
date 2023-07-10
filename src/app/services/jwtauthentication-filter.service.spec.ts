import { TestBed } from '@angular/core/testing';

import { JWTAuthenticationFilterService } from './jwtauthentication-filter.service';

describe('JWTAuthenticationFilterService', () => {
  let service: JWTAuthenticationFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWTAuthenticationFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
