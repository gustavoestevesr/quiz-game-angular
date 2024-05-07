import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent {

  AUTORES = [
    {
      titulo: 'Gustavo Esteves Rocha',
      subTitulo: 'Desenvolvedor Full Stack',
      conteudo: 'Graduado em Ciências da Computação (Unifeso), especialista em Engenharia Mecatrônica (UCP), instrutor educacional de Robótica e Programação, juiz e treinador da OBR e desenvolvedor Full Stack',
      rodape: 'https://www.linkedin.com/in/gustavoestevesr/'
    }
  ]

  public router = inject(Router);
}
