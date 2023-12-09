import { Routes } from '@angular/router';
import { ArticleDetailComponent } from 'src/app/news/article-detail/article-detail.component';
import { NewsComponent } from 'src/app/news/news.component';

export const NEW_ROUTES: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: 'detail',
    component: ArticleDetailComponent
  }
]
