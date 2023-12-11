import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from 'src/app/news/news.service';
import { Observable, catchError, ignoreElements, of } from 'rxjs';
import { Article } from 'src/app/news/interfaces/article.interface';
import { ArticleThumbnailComponent } from 'src/app/news/article-thumbnail/article-thumbnail.component';
import { HeaderService } from 'src/app/core/header/header.service';
import { WarningCardComponent } from 'src/app/shared/components/warning-card/warning-card.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent, WarningCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public articles$: Observable<Article[]> | undefined;
  public articlesError$: Observable<string> | undefined;
  public errorMessage: undefined | string;

  constructor(private newsService: NewsService, private headerService: HeaderService) { }

  public ngOnInit(): void {
    this.articles$ = this.newsService.articles$;
    this.articlesError$ = this.newsService.articles$.pipe(ignoreElements(), catchError((error) => of(error.error?.message ?? 'Error retrieving articles')));
    this.headerService.setFiltersBarMode();
  }

}
