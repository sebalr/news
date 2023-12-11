import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set dark on setDarkTheme()', () => {
    service.setDarkTheme();

    expect(service.$currentTheme()).toBe('dark');
  });

  it('should set light on setLightTheme()', () => {
    service.setLightTheme();

    expect(service.$currentTheme()).toBe('light');
  });
});
