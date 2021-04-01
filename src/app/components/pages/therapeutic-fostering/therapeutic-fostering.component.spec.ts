import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapeuticFosteringComponent } from './therapeutic-fostering.component';

describe('TherapeuticFosteringComponent', () => {
  let component: TherapeuticFosteringComponent;
  let fixture: ComponentFixture<TherapeuticFosteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapeuticFosteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapeuticFosteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
