import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCarDataComponent } from './all-car-data.component';

describe('AllCarDataComponent', () => {
  let component: AllCarDataComponent;
  let fixture: ComponentFixture<AllCarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
