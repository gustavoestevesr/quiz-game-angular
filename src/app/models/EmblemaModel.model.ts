import { QuizEnum } from '../enums/QuizEnum';

export interface EmblemaModel {
  nome: string;
  hablitado: boolean;
  caminho: string;
}

export const LISTA_EMBLEMAS = [
  {
    ditadura_militar_no_brasil: [
      {
        nome: QuizEnum.DITADURA_MILITAR_BRASIL,
        hablitado: false,
        caminho: './../../assets/emblemas/soldier.png',
      },
    ]
  }
];
