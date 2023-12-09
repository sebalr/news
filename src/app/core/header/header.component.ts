import { Component } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { HeaderService } from 'src/app/core/header/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public headerService: HeaderService) { }

}
