import { Component } from '@angular/core';
import { CustomToolbarComponent } from '../custom-toolbar/custom-toolbar.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CustomToolbarComponent, MatCardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
