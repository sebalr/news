import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, effect, signal } from '@angular/core';
import { DATA_THEME } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = signal<'light' | 'dark' | null>(null);
  public $currentTheme = this.currentTheme.asReadonly();

  constructor(@Inject(DOCUMENT) private document: Document) {
    effect(() => {
      if (this.$currentTheme() !== null) {
        localStorage.setItem(DATA_THEME, this.$currentTheme()!);
      }
    });
  }

  public loadInitialTheme(): void {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const savedScheme = localStorage.getItem(DATA_THEME);

    if (savedScheme === 'dark') {
      this.setDarkTheme();
    } else if (savedScheme === 'light') {
      this.setLightTheme();
    } else if (prefersDarkScheme) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }

  }

  public setDarkTheme(): void {
    this.document.documentElement.setAttribute(DATA_THEME, 'dark');
    this.currentTheme.set('dark');
  }

  public setLightTheme(): void {
    this.document.documentElement.removeAttribute(DATA_THEME);
    this.currentTheme.set('light');
  }
}
