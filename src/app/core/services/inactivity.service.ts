import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InactivityDialogComponent } from 'src/app/shared/components/inactivity-dialog/inactivity-dialog.component';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class InactivityService {
  private inactivityTimeout: any;
  private warningTimeout: any;
  private warningTime = 15 * 60 * 1000; 
  private logoutTime = 16 * 60 * 1000;

  constructor(private router: Router, private ngZone: NgZone, private dialog: MatDialog,private auth:AuthService) {
    this.startTracking();
  }

  public startTracking(): void {
    this.resetTimers();
    window.addEventListener('mousemove', () => this.resetTimers());
    window.addEventListener('keydown', () => this.resetTimers());
    window.addEventListener('click', () => this.resetTimers());
  }

  private resetTimers(): void {
    clearTimeout(this.inactivityTimeout);
    clearTimeout(this.warningTimeout);

    this.warningTimeout = setTimeout(() => {
      this.ngZone.run(() => {
        const dialogRef = this.dialog.open(InactivityDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.resetTimers();
          } else {
            this.auth.logout();
          }
        });
      });
    }, this.warningTime);

    this.inactivityTimeout = setTimeout(() => {
      this.ngZone.run(() => {
        this.auth.logout();
      });
    }, this.logoutTime);
  }

  
}
