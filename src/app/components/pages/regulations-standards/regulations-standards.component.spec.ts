import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationsStandardsComponent } from './regulations-standards.component';

describe('RegulationsStandardsComponent', () => {
  let component: RegulationsStandardsComponent;
  let fixture: ComponentFixture<RegulationsStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulationsStandardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulationsStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
