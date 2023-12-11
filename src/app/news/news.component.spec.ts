import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { HeaderService } from 'src/app/core/header/header.service';
import { mockHeaderService, mockNewsService } from 'src/app/mocks/services';
import { NewsService } from 'src/app/news/news.service';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewsComponent],
      providers: [
        { provide: NewsService, useValue: mockNewsService },
        { provide: HeaderService, useValue: mockHeaderService }
      ]
    });
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
