import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersBarComponent } from './filters-bar.component';
import { NewsService } from 'src/app/news/news.service';
import { mockNewsService } from 'src/app/mocks/services';

describe('FiltersBarComponent', () => {
  let component: FiltersBarComponent;
  let fixture: ComponentFixture<FiltersBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FiltersBarComponent],
      providers: [{ provide: NewsService, useValue: mockNewsService }]
    });
    fixture = TestBed.createComponent(FiltersBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
