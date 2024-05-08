import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/start/start.component').then((c) => c.StartComponent)
  },
  {
    path: 'autores',
    loadComponent: () => import('./components/authors/authors.component').then((c) => c.AuthorsComponent)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./components/about/about.component').then((c) => c.AboutComponent)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./components/home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'quiz',
    loadComponent: () => import('./components/quiz/quiz.component').then((c) => c.QuizComponent),
  },
  {
    path: 'ranking',
    loadComponent: () => import('./components/highscore/highscore.component').then((c) => c.HighscoreComponent)
  },
  {
    path: 'emblemas',
    loadComponent: () => import('./components/badges/badges.component').then((c) => c.BadgesComponent)
  },
];
