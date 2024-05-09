import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTooltip, MatMenuModule],
  templateUrl: './custom-toolbar.component.html',
  styleUrl: './custom-toolbar.component.scss'
})
export class CustomToolbarComponent {
  public router = inject(Router);

  isMobile: boolean;
  menuLinks = [
    { label: 'Inicio', route: 'inicio' },
    { label: 'Emblemas', route: 'emblemas' },
    { label: 'Ranking', route: 'ranking' },
    { label: 'Autores', route: 'autores' },
    { label: 'Sobre', route: 'sobre' }
  ];

  constructor() {
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }
}
