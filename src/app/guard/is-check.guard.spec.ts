import { TestBed, async, inject } from '@angular/core/testing';

import { IsCheckGuard } from './is-check.guard';

describe('IsCheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsCheckGuard]
    });
  });

  it('should ...', inject([IsCheckGuard], (guard: IsCheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});
