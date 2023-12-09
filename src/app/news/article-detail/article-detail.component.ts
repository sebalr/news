import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from 'src/app/news/news.service';
import { HeaderService } from 'src/app/core/header/header.service';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  constructor(public newsService: NewsService, private headerService: HeaderService) { }

  public ngOnInit(): void {
    this.headerService.setTitleHeaderMode(this.newsService.$selectedArticle()?.title ?? 'Error');
  }
}
