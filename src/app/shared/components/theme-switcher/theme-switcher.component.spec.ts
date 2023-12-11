import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwitcherComponent } from './theme-switcher.component';
import { mockThemeService } from 'src/app/mocks/services';
import { ThemeService } from 'src/app/core/theme.service';

describe('ThemeSwitcherComponent', () => {
  let component: ThemeSwitcherComponent;
  let fixture: ComponentFixture<ThemeSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ThemeSwitcherComponent],
      providers: [{ provide: ThemeService, useValue: mockThemeService }]
    });
    fixture = TestBed.createComponent(ThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service on setDarkTheme', () => {
    component.setDarkTheme();

    expect(mockThemeService.setDarkTheme).toHaveBeenCalledTimes(1);
    expect(mockThemeService.setLightTheme).not.toHaveBeenCalled();
  });

  it('should call service on setLightTheme', () => {
    component.setLightTheme();

    expect(mockThemeService.setLightTheme).toHaveBeenCalledTimes(1);
    expect(mockThemeService.setDarkTheme).not.toHaveBeenCalled();
  });
});
