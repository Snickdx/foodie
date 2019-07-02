import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymenuComponent } from './mymenu.component';

describe('MymenuComponent', () => {
  let component: MymenuComponent;
  let fixture: ComponentFixture<MymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymenuComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
