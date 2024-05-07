import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tip-quiz',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './tip-quiz.component.html',
  styleUrl: './tip-quiz.component.scss'
})
export class TipQuizComponent {
  constructor(
    public dialogRef: MatDialogRef<TipQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tip: string },
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
