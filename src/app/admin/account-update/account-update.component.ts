import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { AccountDto } from 'src/app/models/account';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent implements OnInit {
  account: AccountDto | null = null;
  isActive:boolean = false;
  constructor(private route: ActivatedRoute, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    const accountId = this.route.snapshot.params['id'];
    this.accountService.getAccountById(accountId, true).subscribe(account => {
      this.account = account;
      this.isActive = !account.isDeleted;
    });
  }

  updateAccount(): void {
    if (this.account) {
      this.account.isDeleted = !this.isActive;
      this.accountService.updateAccount(this.account.accountId, this.account).subscribe(() => {
        alert('Account updated successfully!');
        this.router.navigate(['/account-profile', this.account?.accountId]);
      });
    }
  }
  toggleAccountStatus() {
    this.isActive = !this.isActive;
  }
}
