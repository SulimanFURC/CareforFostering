import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockingbirdFamilyModelComponent } from './mockingbird-family-model.component';

describe('MockingbirdFamilyModelComponent', () => {
  let component: MockingbirdFamilyModelComponent;
  let fixture: ComponentFixture<MockingbirdFamilyModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockingbirdFamilyModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockingbirdFamilyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
