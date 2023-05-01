import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDetailPageComponent } from './input-detail-page.component';

describe('InputDetailPageComponent', () => {
  let component: InputDetailPageComponent;
  let fixture: ComponentFixture<InputDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
