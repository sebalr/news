import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NewsService } from 'src/app/news/news.service';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-filters-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.scss']
})
export class FiltersBarComponent implements OnInit {
  public searchFilterControl = new FormControl<string>('');

  constructor(private newsService: NewsService, private destroyRef: DestroyRef) { }

  public ngOnInit(): void {
    this.searchFilterControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((text: string | null) => { this.newsService.updateNews({ q: text ?? '' }) });
  }

}
