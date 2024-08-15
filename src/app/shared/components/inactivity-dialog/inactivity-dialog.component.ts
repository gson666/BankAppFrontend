import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inactivity-dialog',
  template: `
    <h2 mat-dialog-title>Inactivity Detected</h2>
    <mat-dialog-content>
      <p>You have been inactive for 14 minutes. Press OK to stay logged in.</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onConfirm()">OK</button>
    </mat-dialog-actions>
  `,
})
export class InactivityDialogComponent {
  constructor(private dialogRef: MatDialogRef<InactivityDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
