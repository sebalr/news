import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleThumbnailComponent } from './article-thumbnail.component';
import { PillComponent } from 'src/app/shared/components/pill/pill.component';
import { mockNewsService } from 'src/app/mocks/services';
import { NewsService } from 'src/app/news/news.service';

describe('ArticleThumbnailComponent', () => {
  let component: ArticleThumbnailComponent;
  let fixture: ComponentFixture<ArticleThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArticleThumbnailComponent, PillComponent],
      providers: [{ provide: NewsService, useValue: mockNewsService }]
    });
    fixture = TestBed.createComponent(ArticleThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
