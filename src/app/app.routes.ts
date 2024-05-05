import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then((c) => c.HomeComponent)
  },
  /*{
    path: '',
    loadComponent: () => import('./components/home/home.component').then((c) => c.HomeComponent)
  },*/
  {
    path: 'category',
    loadComponent: () => import('./components/category/category.component').then((c) => c.CategoryComponent)
  },
  {
    path: 'quiz',
    loadComponent: () => import('./components/quiz/quiz.component').then((c) => c.QuizComponent),
  },
  {
    path: 'result',
    loadComponent: () => import('./components/result/result.component').then((c) => c.ResultComponent)
  },
  {
    path: 'highscore',
    loadComponent: () => import('./components/highscore/highscore.component').then((c) => c.HighscoreComponent)
  },
  {
    path: 'badges',
    loadComponent: () => import('./components/badges/badges.component').then((c) => c.BadgesComponent)
  },
];
