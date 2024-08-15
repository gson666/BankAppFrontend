import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from 'src/app/core/services/bank.service';
import { UserService } from 'src/app/core/services/user.service';
import { AccountDto } from 'src/app/models/account';
import { UserDto } from 'src/app/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user:UserDto | null = null;
  accounts:AccountDto[] = [];
  message:string = '';
  accountCount: number = 0;

  constructor(private route:ActivatedRoute,private userSer:UserService,private bankSer:BankService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.userSer.getUserById(userId,true).subscribe(user=>{
      this.user = user;
      this.getAccountsByOwnerId(userId);
    });
  }

  getAccountsByOwnerId(userId: string) {
    this.bankSer.getAccountsByUserId(userId, true).subscribe(accounts => {
      if (!accounts || accounts.length === 0) {
        this.message = 'N/A';
      } else {
        this.accounts = accounts;
        this.accountCount = accounts.length;
      }
    });
  }


}
