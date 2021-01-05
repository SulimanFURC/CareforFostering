import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosteringTypesComponent } from './fostering-types.component';

describe('FosteringTypesComponent', () => {
  let component: FosteringTypesComponent;
  let fixture: ComponentFixture<FosteringTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FosteringTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FosteringTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
