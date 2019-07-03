import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumodalComponent } from './menumodal.component';

describe('MenumodalComponent', () => {
  let component: MenumodalComponent;
  let fixture: ComponentFixture<MenumodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenumodalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenumodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
