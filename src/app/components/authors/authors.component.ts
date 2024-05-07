import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomToolbarComponent } from '../custom-toolbar/custom-toolbar.component';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, CustomToolbarComponent],
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
}
