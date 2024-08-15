import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { AccountDto } from 'src/app/models/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  accounts:AccountDto[] = [];

  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts=>{
      this.accounts =accounts;
    });
  }

  viewAccountDetails(accountId:number){
    this.router.navigate(['/account-profile',accountId]);
  }
  updateAccount(accountId: number): void {
    this.router.navigate(['/account-update', accountId]);
  }
  isAccountActive(account: AccountDto): boolean {
    return !account.isDeleted;
  }
}
