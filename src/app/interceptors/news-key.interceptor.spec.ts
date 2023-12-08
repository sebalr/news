import { TestBed } from '@angular/core/testing';

import { NewsKeyInterceptor } from './news-key.interceptor';

describe('NewsKeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NewsKeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NewsKeyInterceptor = TestBed.inject(NewsKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
