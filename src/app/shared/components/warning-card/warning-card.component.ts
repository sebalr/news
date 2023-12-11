import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-warning-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './warning-card.component.html',
  styleUrls: ['./warning-card.component.scss']
})
export class WarningCardComponent {

  @Input({ required: true }) public message: string = '';

}
