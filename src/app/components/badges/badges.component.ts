import { Component, OnInit } from '@angular/core';
import { CustomToolbarComponent } from '../custom-toolbar/custom-toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LISTA_EMBLEMAS } from '../../models/EmblemaModel.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [CommonModule, CustomToolbarComponent, MatCardModule, MatTooltipModule],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss'
})
export class BadgesComponent implements OnInit {
  LISTA_EMBLEMAS = LISTA_EMBLEMAS;

  ngOnInit(): void {
    this.getEmblemasLocalStorage()
  }

  getEmblemasLocalStorage() {
    const emblemas = localStorage.getItem('meus-emblemas');
    if (emblemas) {
      this.LISTA_EMBLEMAS = JSON.parse(emblemas);
    }
  }
}
