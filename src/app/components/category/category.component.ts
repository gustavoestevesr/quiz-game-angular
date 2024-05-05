import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { QuizEnum, quizMap } from '../../enums/QuizEnum';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface PeriodicElement {
  nome: string;
  icone: string;
  descricao: string;
  caminho: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    nome: quizMap[QuizEnum.DITADURA_MILITAR].nome,
    icone: quizMap[QuizEnum.DITADURA_MILITAR].icone,
    descricao: quizMap[QuizEnum.DITADURA_MILITAR].descricao,
    caminho: quizMap[QuizEnum.DITADURA_MILITAR].caminho,
  },
  {
    nome: quizMap[QuizEnum.ERA_VARGAS].nome,
    icone: quizMap[QuizEnum.ERA_VARGAS].icone,
    descricao: quizMap[QuizEnum.ERA_VARGAS].descricao,
    caminho: quizMap[QuizEnum.ERA_VARGAS].caminho,
  },
  {
    nome: quizMap[QuizEnum.FEUDALISMO].nome,
    icone: quizMap[QuizEnum.FEUDALISMO].icone,
    descricao: quizMap[QuizEnum.FEUDALISMO].descricao,
    caminho: quizMap[QuizEnum.FEUDALISMO].caminho,
  },
  {
    nome: quizMap[QuizEnum.REVOLUCAO_FRANCESA].nome,
    icone: quizMap[QuizEnum.REVOLUCAO_FRANCESA].icone,
    descricao: quizMap[QuizEnum.REVOLUCAO_FRANCESA].descricao,
    caminho: quizMap[QuizEnum.REVOLUCAO_FRANCESA].caminho,
  },
  {
    nome: quizMap[QuizEnum.REVOLUCAO_INDUSTRIAL_1].nome,
    icone: quizMap[QuizEnum.REVOLUCAO_INDUSTRIAL_1].icone,
    descricao: quizMap[QuizEnum.REVOLUCAO_INDUSTRIAL_1].descricao,
    caminho: quizMap[QuizEnum.REVOLUCAO_INDUSTRIAL_1].caminho,
  },
  {
    nome: quizMap[QuizEnum.REVOLUCAO_INDUSTRIAL_2].nome,
    icone: quizMap[QuizEnum.REVOLUCAO_INDUSTRIAL_2].icone,
    descricao: quizMap[QuizEnum.REVOLUCAO_INDUSTRIAL_2].descricao,
    caminho: quizMap[QuizEnum.REVOLUCAO_INDUSTRIAL_2].caminho,
  },
  {
    nome: quizMap[QuizEnum.MITOLOGIA_GREGA].nome,
    icone: quizMap[QuizEnum.MITOLOGIA_GREGA].icone,
    descricao: quizMap[QuizEnum.MITOLOGIA_GREGA].descricao,
    caminho: quizMap[QuizEnum.MITOLOGIA_GREGA].caminho,
  },
];

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CategoryComponent implements AfterViewInit {
  dataSource: MatTableDataSource<any>;
  columnsToDisplay = ['icone', 'nome', 'descricao'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand', 'acao'];
  expandedElement: PeriodicElement | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public router = inject(Router);

  navegarQuiz(nome: string) {
    this.router.navigate(['quiz'], { queryParams: { nome } });

  }

  expandOrNavigate(element: PeriodicElement, event: Event) {
    console.warn((event.target as HTMLElement))
    console.warn((event.target as HTMLElement).classList)
    if (!(event.target as HTMLElement).classList.contains('navigate-button')) {
      this.navegarQuiz(element.nome);
    } else {
      this.navegarQuiz(element.nome);
    }
  }

}
