import { TestBed } from '@angular/core/testing';

import { RouteGuard3Guard } from './route-guard-3.guard';

describe('RouteGuard3Guard', () => {
  let guard: RouteGuard3Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteGuard3Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
