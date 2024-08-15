import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  users:number = 0;
  accounts:number = 0;


  constructor(private auth:AuthService,private account:AccountService,private router:Router) { }


  ngOnInit(): void {
    this.auth.getNumberOfUsers().subscribe(users=>{
      this.users = users;
    });
    this.account.countAccounts().subscribe(accCount=>{
      this.accounts = accCount;
    })
  }
  navigateToAccounts() {
    this.router.navigate(['/account-list']);
  }
  navigateToUsers() {
    this.router.navigate(['/user-list']);
  }


}
