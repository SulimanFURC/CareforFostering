import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanIFosterComponent } from './can-i-foster.component';

describe('CanIFosterComponent', () => {
  let component: CanIFosterComponent;
  let fixture: ComponentFixture<CanIFosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanIFosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanIFosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
