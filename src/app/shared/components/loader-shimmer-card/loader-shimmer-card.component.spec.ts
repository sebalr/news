import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderShimmerCardComponent } from './loader-shimmer-card.component';

describe('LoaderShimmerCardComponent', () => {
  let component: LoaderShimmerCardComponent;
  let fixture: ComponentFixture<LoaderShimmerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoaderShimmerCardComponent]
    });
    fixture = TestBed.createComponent(LoaderShimmerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
