import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarersAndParentsComponent } from './carers-and-parents.component';

describe('CarersAndParentsComponent', () => {
  let component: CarersAndParentsComponent;
  let fixture: ComponentFixture<CarersAndParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarersAndParentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarersAndParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
