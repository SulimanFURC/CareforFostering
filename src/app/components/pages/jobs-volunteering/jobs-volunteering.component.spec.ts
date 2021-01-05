import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsVolunteeringComponent } from './jobs-volunteering.component';

describe('JobsVolunteeringComponent', () => {
  let component: JobsVolunteeringComponent;
  let fixture: ComponentFixture<JobsVolunteeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsVolunteeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsVolunteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
