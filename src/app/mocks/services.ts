import { Type, signal } from '@angular/core'
import { Subject } from 'rxjs'
import { Filters } from 'src/app/news/interfaces/api.interface'

export const mockThemeService = {
  loadInitialTheme: jest.fn(),
  setDarkTheme: jest.fn(),
  setLightTheme: jest.fn(),
  $currentTheme: signal<'dark' | 'light'>('dark')
}

export const mockNewsService = {
  openDetail: jest.fn(),
  updateNews: jest.fn(),
  $selectedArticle: signal<Filters | null>(null),
  articles$: new Subject()
}

export const mockHeaderService = {
  setTitleHeaderMode: jest.fn(),
  setFiltersBarMode: jest.fn(),
  showLoader: jest.fn(),
  hideLoader: jest.fn(),
  $headerMode: signal<{ component: Type<any> | undefined, inputs?: Record<string, unknown> }>({ component: undefined }),
  $showLoader: signal<boolean>(false)
}
