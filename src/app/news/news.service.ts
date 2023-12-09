import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, shareReplay, startWith, switchMap } from 'rxjs';
import { ApiResponse, Filters } from 'src/app/news/interfaces/api.interface';
import { Article } from 'src/app/news/interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public articles$: Observable<Article[]>;

  private filters = new Subject<Filters | null>();

  constructor(private httpClient: HttpClient) {
    this.articles$ = this.filters.pipe(
      startWith(null),
      switchMap((filters) =>
        this.httpClient.get<ApiResponse>('https://newsapi.org/v2/everything?sources=google-news-ar,infobae,la-gaceta&pageSize=50')
      ),
      map((response) => {
        if (response.status === 'ok') {
          return response.articles;
        }

        throw new Error(response.message ?? 'Invalid response')
      }),
      shareReplay(1),
    );
  }

  public updateNews(filters: Filters | null): void {
    this.filters.next(filters);
  }

}
