import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealmodalComponent } from './mealmodal.component';

describe('MealmodalComponent', () => {
  let component: MealmodalComponent;
  let fixture: ComponentFixture<MealmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealmodalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
