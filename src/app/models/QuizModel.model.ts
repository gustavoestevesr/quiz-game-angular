import { QuizEnum, quizMap } from "../enums/QuizEnum";

export interface QuizModel {
  nome: string;
  icone: string,
  descricao: string;
  caminho: string;
}

export interface QuizJson {
  numb: number,
    question: string,
    subQuestion: string,
    tip: string,
    reference: string,
    image: string,
    answer: string,
    options: string[],
}

export const LISTA_QUIZZES: QuizModel[] = [
  {
    nome: quizMap[QuizEnum.DITADURA_MILITAR_BRASIL].nome,
    icone: quizMap[QuizEnum.DITADURA_MILITAR_BRASIL].icone,
    descricao: quizMap[QuizEnum.DITADURA_MILITAR_BRASIL].descricao,
    caminho: quizMap[QuizEnum.DITADURA_MILITAR_BRASIL].caminho,
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
