import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import JSConfetti from 'js-confetti';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { TipQuizComponent } from '../../dialogs/tip-quiz/tip-quiz.component';
import { EmblemaModel, LISTA_EMBLEMAS } from '../../models/EmblemaModel.model';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent implements OnInit, OnDestroy {
  private unsubscribeAll: Subject<void> = new Subject();

  public mostrarCardRegras: boolean = true;
  public comecouQuiz: boolean = false;
  public listaQuestoes: any[] = [];
  public numeroQuestaoAtual: number = 0;
  public mensagensResultado: string[] = [''];
  public correctAnswerCount: number = 0;
  public opcaoSelecionada: string = '';
  public nomeQuiz: string = '';
  public tempoRestante: number = 0;

  private TEMPO_LIMITE = 1200; // 20 min
  private intervaloTempo: any;

  public router = inject(Router);
  public activatedRoute = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private dialog = inject(MatDialog);
  private toastr = inject(ToastrService);

  ngOnInit() {
    this.getNomeQuiz();
    this.carregarQuestoesQuiz(this.nomeQuiz);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
    clearInterval(this.intervaloTempo);
  }

  getNomeQuiz() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.nomeQuiz = params['nome'];
    });
  }

  lancarConfete() {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }

  nextQuestion() {
    const dialogRef = this.dialog.open(TipQuizComponent, {
      data: {
        tip: this.listaQuestoes[this.numeroQuestaoAtual].tip,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((result) => {
        // Verifica se a resposta está correta
        if (this.checkAnswer(this.opcaoSelecionada)) {
          this.correctAnswerCount++;
          this.lancarConfete();
        }
        // Verifica se é a última questão
        if (this.numeroQuestaoAtual < this.listaQuestoes.length - 1) {
          this.numeroQuestaoAtual++;
          this.opcaoSelecionada = '';
        } else {
          this.finalizarQuiz();
        }
      });
  }

  habilitarEmblema() {
    const emblema = LISTA_EMBLEMAS.find((emblema: EmblemaModel) =>
      emblema.nome.includes(this.nomeQuiz)
    );
    if (emblema) {
      emblema.bloqueado = false;
    }
  }

  setResultado() {
    this.mensagensResultado[0] = `Número de acertos: ${this.correctAnswerCount}/${this.listaQuestoes.length} questões.`;
    this.mensagensResultado[1] = `Tempo de duração: ${this.formatarTemporizador(
      this.TEMPO_LIMITE - this.tempoRestante
    )}.`;
    this.mensagensResultado[2] = `Conquistas desbloqueadas: <- SOLDADO ->.`;
  }

  checkAnswer(option: string) {
    if (option === this.listaQuestoes[this.numeroQuestaoAtual].answer) {
      return true;
    }
    return false;
  }

  carregarQuestoesQuiz(nomeQuiz: string) {
    this.http
      .get(`../../../assets/database/quizzes/${nomeQuiz}.json`)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res: any) => {
        if (!res) {
          this.toastr.warning('Quiz ainda em desenvolvimento.', 'Atenção!', {
            progressBar: true,
            timeOut: 5000,
          });
          this.router.navigate(['inicio']);
        }

        this.embaralharLista(res);
        this.listaQuestoes = res;
        this.mostrarCardRegras = true;
        this.tempoRestante = this.TEMPO_LIMITE;
      });
  }

  iniciarQuiz() {
    this.comecouQuiz = true;
    this.mostrarCardRegras = false;
    this.iniciarTemporizador();
  }

  iniciarTemporizador(): void {
    this.intervaloTempo = setInterval(() => {
      this.tempoRestante--;
      if (this.tempoRestante === 0) {
        this.finalizarQuiz();
      }
    }, 1000);
  }

  finalizarQuiz(): void {
    clearInterval(this.intervaloTempo);
    this.setResultado();
    this.habilitarEmblema();
    this.comecouQuiz = false;
  }

  voltarTela() {
    this.router.navigate(['inicio']);
  }

  embaralharLista(array: any[]) {
    const tamanhoArray = array.length;
    for (let i = tamanhoArray - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  formatarTemporizador(segundos: number): string {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    const tempoFormatado = `${this.padTime(horas)}:${this.padTime(
      minutos
    )}:${this.padTime(segundosRestantes)}`;
    return tempoFormatado;
  }

  padTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }
}
