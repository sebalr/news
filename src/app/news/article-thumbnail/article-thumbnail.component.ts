import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/news/interfaces/article.interface';
import { NgOptimizedImage } from '@angular/common'
import { PillComponent } from 'src/app/shared/components/pill/pill.component';
import { NewsService } from 'src/app/news/news.service';
import { DEFAULT_IMAGE } from 'src/app/shared/constants';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, PillComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './article-thumbnail.component.html',
  styleUrls: ['./article-thumbnail.component.scss']
})
export class ArticleThumbnailComponent {
  @Input({ required: true }) public article: Article | null = null;

  public readonly DEFAULT_IMAGE = DEFAULT_IMAGE;

  constructor(private newsService: NewsService) { }

  public openDetail(): void {
    if (this.article) {
      this.newsService.openDetail(this.article);
    }
  }
}
