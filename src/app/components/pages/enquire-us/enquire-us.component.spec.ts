import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquireUsComponent } from './enquire-us.component';

describe('EnquireUsComponent', () => {
  let component: EnquireUsComponent;
  let fixture: ComponentFixture<EnquireUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquireUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquireUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
