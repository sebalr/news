import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, finalize, map, shareReplay, startWith, switchMap, tap } from 'rxjs';
import { HeaderService } from 'src/app/core/header/header.service';
import { ApiResponse, Filters } from 'src/app/news/interfaces/api.interface';
import { Article } from 'src/app/news/interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public articles$!: Observable<Article[]>

  private selectedArticle = signal<Article | null>(null);
  public $selectedArticle = this.selectedArticle.asReadonly();

  private filters = new Subject<Filters | null>();
  private currentFilters: Filters | null = null;

  constructor(private httpClient: HttpClient, private router: Router, private headerService: HeaderService) {
    this.initArticles();
  }

  public openDetail(article: Article): void {
    this.selectedArticle.set(article);
    this.router.navigate(['detail']);
  }

  private initArticles() {
    this.articles$ = this.filters.pipe(
      startWith(null),
      tap(() => this.headerService.showLoader()),
      switchMap((filters) => {
        const newFilters = this.currentFilters ? { ...this.currentFilters, ...filters } : filters;
        this.currentFilters = newFilters;
        return this.httpClient.get<ApiResponse>(`https://newsapi.org/v2/everything?sources=google-news-ar,infobae,la-gaceta&pageSize=50&q=${newFilters?.q ?? ''}`)
          .pipe(
            finalize(() => this.headerService.hideLoader())
          );
      }),
      map((response) => {
        if (response.status === 'ok') {
          return response.articles;
        }

        throw new Error(response.message ?? 'Invalid response');
      }),
      shareReplay(1),
    );
  }

  public updateNews(filters: Filters | null): void {
    this.filters.next(filters);
  }

}
