/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaisTablaComponent } from './pais-tabla.component';

describe('PaisTablaComponent', () => {
  let component: PaisTablaComponent;
  let fixture: ComponentFixture<PaisTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
