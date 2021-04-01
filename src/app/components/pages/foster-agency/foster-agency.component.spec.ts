import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterAgencyComponent } from './foster-agency.component';

describe('FosterAgencyComponent', () => {
  let component: FosterAgencyComponent;
  let fixture: ComponentFixture<FosterAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FosterAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
