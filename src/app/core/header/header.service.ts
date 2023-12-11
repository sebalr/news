import { Injectable, Type, signal } from '@angular/core';
import { FiltersBarComponent } from 'src/app/news/filters-bar/filters-bar.component';
import { TitleBarComponent } from 'src/app/title-bar/title-bar.component';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerMode = signal<{ component: Type<any>, inputs?: Record<string, unknown> }>({ component: FiltersBarComponent });
  public $headerMode = this.headerMode.asReadonly();

  private loader = signal<boolean>(false);
  public $showLoader = this.loader.asReadonly();

  public setTitleHeaderMode(title: string): void {
    this.headerMode.set({ component: TitleBarComponent, inputs: { title } });
  }

  public setFiltersBarMode(): void {
    this.headerMode.set({ component: FiltersBarComponent });
  }

  public showLoader(): void {
    this.loader.set(true);
  }

  public hideLoader(): void {
    this.loader.set(false);
  }
}
