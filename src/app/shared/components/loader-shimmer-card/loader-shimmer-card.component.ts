import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader-shimmer-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './loader-shimmer-card.component.html',
  styleUrls: ['./loader-shimmer-card.component.scss']
})
export class LoaderShimmerCardComponent {

}
