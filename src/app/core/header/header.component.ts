import { Component } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { HeaderService } from 'src/app/core/header/header.service';
import { LoadingBarComponent } from 'src/app/core/loading-bar/loading-bar.component';
import { ThemeSwitcherComponent } from 'src/app/shared/components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet, LoadingBarComponent, ThemeSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public headerService: HeaderService) { }

}
