import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-custom-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatTooltip],
  templateUrl: './custom-toolbar.component.html',
  styleUrl: './custom-toolbar.component.scss'
})
export class CustomToolbarComponent {
  public router = inject(Router);
}
