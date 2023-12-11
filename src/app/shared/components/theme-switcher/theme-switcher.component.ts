import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {

  public $theme = this.themeService.$currentTheme;

  constructor(private themeService: ThemeService) { }

  public setDarkTheme(): void {
    this.themeService.setDarkTheme();
  }

  public setLightTheme(): void {
    this.themeService.setLightTheme();
  }

}
