import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/news/interfaces/article.interface';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './article-thumbnail.component.html',
  styleUrls: ['./article-thumbnail.component.scss']
})
export class ArticleThumbnailComponent {
  @Input({ required: true }) public article: Article | null = null;

  public readonly DEFAULT_IMAGE = 'assets/images/news-placeholder.png';
}
