import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  public showWarning: boolean = true;
  public isQuizStarted: boolean = false;
  public isQuizEnded: boolean = false;
  public questionsList: any[] = [];
  public currentQuestionNumber: number = 0;
  public resultMessage: string = '';
  public correctAnswerCount: number = 0;
  public selectedOption: string = '';
  public nomeQuiz: string = '';

  private TIME_LIMIT_ETAPA = 1200; // 20 min
  private remainingTime: number = 0;
  private timerInterval: any;

  public router = inject(Router);
  public activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.getNomeQuiz();
  }

  getNomeQuiz() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.nomeQuiz = params['nome'];
    })
  }

  startQuiz() {

  }

  closeDialog() {
    this.router.navigate(['category'])
  }
}
