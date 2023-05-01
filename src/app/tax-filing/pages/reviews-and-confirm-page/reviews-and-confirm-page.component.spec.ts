import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsAndConfirmPageComponent } from './reviews-and-confirm-page.component';

describe('ReviewsAndConfirmPageComponent', () => {
  let component: ReviewsAndConfirmPageComponent;
  let fixture: ComponentFixture<ReviewsAndConfirmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsAndConfirmPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsAndConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
