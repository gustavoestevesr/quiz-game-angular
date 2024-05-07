import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipQuizComponent } from './tip-quiz.component';

describe('TipQuizComponent', () => {
  let component: TipQuizComponent;
  let fixture: ComponentFixture<TipQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
