import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ThemeService } from 'src/app/core/theme.service';
import { mockHeaderService, mockNewsService, mockThemeService } from 'src/app/mocks/services';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { HeaderService } from 'src/app/core/header/header.service';
import { NewsService } from 'src/app/news/news.service';

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, HeaderComponent, FooterComponent],
      providers: [
        { provide: HeaderService, useValue: mockHeaderService },
        { provide: NewsService, useValue: mockNewsService },
        { provide: ThemeService, useValue: mockThemeService }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should call load theme`, () => {
    fixture.detectChanges();
    expect(mockThemeService.loadInitialTheme).toHaveBeenCalledTimes(1);
  });

});
