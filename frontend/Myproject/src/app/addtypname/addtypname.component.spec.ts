import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtypnameComponent } from './addtypname.component';

describe('AddtypnameComponent', () => {
  let component: AddtypnameComponent;
  let fixture: ComponentFixture<AddtypnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtypnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtypnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
