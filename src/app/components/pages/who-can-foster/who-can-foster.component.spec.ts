import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoCanFosterComponent } from './who-can-foster.component';

describe('WhoCanFosterComponent', () => {
  let component: WhoCanFosterComponent;
  let fixture: ComponentFixture<WhoCanFosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoCanFosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoCanFosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
