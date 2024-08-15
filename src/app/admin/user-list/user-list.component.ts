import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { UserDto } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 users:UserDto[] = [];

 constructor(private userServ:UserService,private router:Router){ }

 ngOnInit(): void {
   this.userServ.getUsers().subscribe(users=>{
    this.users = users;
   });
 }


 viewUserDetails(userId:string){
  this.router.navigate(['/user-profile',userId]);
 }
 updateUser(userId:string){
  this.router.navigate(['user-update',userId]);
 }
 isUserActive(account: UserDto): boolean {
  return !account.isDeleted;
}
}
