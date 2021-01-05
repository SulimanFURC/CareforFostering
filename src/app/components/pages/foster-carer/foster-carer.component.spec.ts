import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterCarerComponent } from './foster-carer.component';

describe('FosterCarerComponent', () => {
  let component: FosterCarerComponent;
  let fixture: ComponentFixture<FosterCarerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FosterCarerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterCarerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
