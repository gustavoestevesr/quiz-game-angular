import { QuizEnum } from '../enums/QuizEnum';

export interface EmblemaModel {
  nome: string;
  bloqueado: boolean;
  caminho: string;
}

export const LISTA_EMBLEMAS = [
  {
    nome: QuizEnum.DITADURA_MILITAR_BRASIL,
    bloqueado: true,
    caminho: './../../assets/emblemas/soldado.png',
  },
  {
    nome: QuizEnum.ERA_VARGAS,
    bloqueado: true,
    caminho: './../../assets/emblemas/presidente.png',
  },
  {
    nome: QuizEnum.FEUDALISMO,
    bloqueado: true,
    caminho: './../../assets/emblemas/rei.png',
  },
  {
    nome: QuizEnum.REVOLUCAO_FRANCESA,
    bloqueado: true,
    caminho: './../../assets/emblemas/revolucao-francesa.png',
  },
  {
    nome: QuizEnum.REVOLUCAO_INDUSTRIAL_1,
    bloqueado: true,
    caminho: './../../assets/emblemas/fabrica.png',
  },
  {
    nome: QuizEnum.REVOLUCAO_INDUSTRIAL_2,
    bloqueado: true,
    caminho: './../../assets/emblemas/braco-robotico.png',
  },
  {
    nome: QuizEnum.MITOLOGIA_GREGA,
    bloqueado: true,
    caminho: './../../assets/emblemas/olimpo.png',
  },
];
