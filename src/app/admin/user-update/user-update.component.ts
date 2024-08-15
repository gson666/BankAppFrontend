import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { BankService } from 'src/app/core/services/bank.service';
import { UserService } from 'src/app/core/services/user.service';
import { AccountDto } from 'src/app/models/account';
import { UserDto } from 'src/app/models/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  user: UserDto | null = null;
  isActive:boolean = false;
  
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router,private bankSer:BankService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.userService.getUserById(userId, true).subscribe(user => {
      this.user = user;
      if (this.user) {
        this.isActive = !this.user.isDeleted;
      }
    });
  }

  updateUser(): void {
    if (this.user) {
      this.userService.updateUser(this.user.id, this.user).subscribe({
        next: () => {
          alert('User updated successfully!');
          this.router.navigate(['/user-list']);
        },
        error: (err) => {
          console.error('Update failed:', err);
          alert('Update failed: ' + (err.error?.message || 'Unknown error occurred. Please try again.'));
        }
      });
    }
  }
  toggleUserActivation(): void {
    if (this.user) {
      if (this.isActive) {
        this.userService.deActivateUser(this.user.id).subscribe({
          next: () => {
            alert('User deactivated successfully!');
            this.isActive = false; // Update the local isActive status
          },
          error: (err) => {
            console.error('Deactivation failed:', err);
            alert('Deactivation failed: ' + (err.error?.message || 'Unknown error occurred. Please try again.'));
          }
        });
      } else {
        this.userService.activateUser(this.user.id).subscribe({
          next: () => {
            alert('User activated successfully!');
            this.isActive = true; // Update the local isActive status
          },
          error: (err) => {
            console.error('Activation failed:', err);
            alert('Activation failed: ' + (err.error?.message || 'Unknown error occurred. Please try again.'));
          }
        });
      }
    }
  }
  
}
