import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from 'src/app/news/news.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/news/interfaces/article.interface';
import { ArticleThumbnailComponent } from 'src/app/news/article-thumbnail/article-thumbnail.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public articles$: Observable<Article[]> | undefined;

  constructor(private newsService: NewsService) { }

  public ngOnInit(): void {
    this.articles$ = this.newsService.getNews(null);
  }

}
