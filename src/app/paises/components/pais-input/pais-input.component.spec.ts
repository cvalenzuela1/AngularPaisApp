/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaisInputComponent } from './pais-input.component';

describe('PaisInputComponent', () => {
  let component: PaisInputComponent;
  let fixture: ComponentFixture<PaisInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
