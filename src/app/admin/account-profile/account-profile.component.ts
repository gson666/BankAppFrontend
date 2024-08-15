import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { UserService } from 'src/app/core/services/user.service';
import { AccountDto } from 'src/app/models/account';
import { UserDto } from 'src/app/models/user';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})
export class AccountProfileComponent implements OnInit {
  account:AccountDto | null = null;
  owner:UserDto | null = null;
  isActive:boolean = false;
  constructor(private route:ActivatedRoute,private accountSer:AccountService,private userSer:UserService){ }

  ngOnInit(): void {
    const accountId = this.route.snapshot.params['id'];
    this.accountSer.getAccountById(accountId,true).subscribe(account=>{
      this.account = account;
      this.isActive = account.isDeleted;
      console.log(this.isActive);
      if(this.account){
        this.ownerOfAccount(this.account.userId);
      }
    });
  }
  ownerOfAccount(userId:string){
    this.userSer.getUserById(userId,true).subscribe(user=>{
      this.owner = user;
    });
  }
  showAccountActive():string{
    return !this.isActive? '🗸' : 'x';
  }

}
