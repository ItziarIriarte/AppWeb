/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepartidoresComponent } from './repartidores.component';

describe('RepartidoresComponent', () => {
  let component: RepartidoresComponent;
  let fixture: ComponentFixture<RepartidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
