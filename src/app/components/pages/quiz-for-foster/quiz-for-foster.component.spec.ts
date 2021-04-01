import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizForFosterComponent } from './quiz-for-foster.component';

describe('QuizForFosterComponent', () => {
  let component: QuizForFosterComponent;
  let fixture: ComponentFixture<QuizForFosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizForFosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizForFosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
