import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyFosterComponent } from './why-foster.component';

describe('WhyFosterComponent', () => {
  let component: WhyFosterComponent;
  let fixture: ComponentFixture<WhyFosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyFosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyFosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
