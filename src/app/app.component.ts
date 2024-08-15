import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { InactivityService } from './core/services/inactivity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bank';

  constructor(private auth:AuthService){}

  
  isLoggedIn(){
    this.auth.isLoggedIn();
  }

  ngOnInit() {
    // this.inactivity.startTracking();
  }
}
