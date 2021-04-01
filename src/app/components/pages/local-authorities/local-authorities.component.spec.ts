import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalAuthoritiesComponent } from './local-authorities.component';

describe('LocalAuthoritiesComponent', () => {
  let component: LocalAuthoritiesComponent;
  let fixture: ComponentFixture<LocalAuthoritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalAuthoritiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalAuthoritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
