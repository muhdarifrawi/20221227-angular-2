import { TestBed } from '@angular/core/testing';

import { RouteGuard1Guard } from './route-guard-1.guard';

describe('RouteGuard1Guard', () => {
  let guard: RouteGuard1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteGuard1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
