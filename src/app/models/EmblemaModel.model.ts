import { QuizEnum } from '../enums/QuizEnum';

export interface EmblemaModel {
  quiz: string;
  bloqueado: boolean;
  caminho: string;
  emblema: string;
}

export const LISTA_EMBLEMAS = [
  {
    quiz: QuizEnum.DITADURA_MILITAR_BRASIL,
    bloqueado: true,
    caminho: './../../assets/emblemas/soldado.png',
    emblema: 'Soldado',
  },
  {
    quiz: QuizEnum.ERA_VARGAS,
    bloqueado: true,
    caminho: './../../assets/emblemas/presidente.png',
    emblema: 'Presidente',
  },
  {
    quiz: QuizEnum.FEUDALISMO,
    bloqueado: true,
    caminho: './../../assets/emblemas/rei.png',
    emblema: 'Rei',
  },
  {
    quiz: QuizEnum.REVOLUCAO_FRANCESA,
    bloqueado: true,
    caminho: './../../assets/emblemas/revolucao-francesa.png',
    emblema: 'Revolução Francesa',
  },
  {
    quiz: QuizEnum.REVOLUCAO_INDUSTRIAL_1,
    bloqueado: true,
    caminho: './../../assets/emblemas/fabrica.png',
    emblema: 'Fábrica',
  },
  {
    quiz: QuizEnum.REVOLUCAO_INDUSTRIAL_2,
    bloqueado: true,
    caminho: './../../assets/emblemas/braco-robotico.png',
    emblema: 'Braço Robótico',
  },
  {
    quiz: QuizEnum.MITOLOGIA_GREGA,
    bloqueado: true,
    caminho: './../../assets/emblemas/olimpo.png',
    emblema: 'Olimpo',
  },
];
