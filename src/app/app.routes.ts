import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./news/news.routes').then(m => m.NEW_ROUTES)
  }
];
