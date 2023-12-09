import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

export const newsKeyInterceptor: HttpInterceptorFn = (request, next) => {
  if (request.url.startsWith('https://newsapi.org')) {
    request = request.clone({
      headers: request.headers.set('Authorization', environment.NEWS_API)
    });
  }

  return next(request);
}

