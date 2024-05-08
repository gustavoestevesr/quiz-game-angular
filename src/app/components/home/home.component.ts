import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { LISTA_QUIZZES } from '../../models/QuizModel.model';
import { CustomToolbarComponent } from '../custom-toolbar/custom-toolbar.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    CustomToolbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent {
  public LISTA_QUIZZES = LISTA_QUIZZES;
  public router = inject(Router);

  constructor() {}

  navegarQuiz(nome: string) {
    this.router.navigate(['quiz'], { queryParams: { nome } });

  }

  limitarTexto(texto: string, qtdLetras: number) {
    return texto.slice(0, qtdLetras) + '...'
  }

}
