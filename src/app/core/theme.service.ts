import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { DATA_THEME } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public loadInitialTheme(): void {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const savedScheme = localStorage.getItem(DATA_THEME);

    if (prefersDarkScheme || savedScheme === 'dark') {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  public setDarkTheme(): void {
    this.document.documentElement.setAttribute(DATA_THEME, 'dark');
  }

  public setLightTheme(): void {
    this.document.documentElement.removeAttribute(DATA_THEME);

  }
}
