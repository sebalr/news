import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NewsService } from 'src/app/news/news.service';
import { HeaderService } from 'src/app/core/header/header.service';
import { DEFAULT_IMAGE } from 'src/app/shared/constants';
import { PillComponent } from 'src/app/shared/components/pill/pill.component';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, PillComponent],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  public readonly DEFAULT_IMAGE = DEFAULT_IMAGE;
  public $selectedArticle = this.newsService.$selectedArticle;

  constructor(private newsService: NewsService, private headerService: HeaderService) { }

  public ngOnInit(): void {
    this.headerService.setTitleHeaderMode(this.$selectedArticle()?.title ?? 'Error');
  }
}
