import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
role:string | null = '';
constructor(private auth:AuthService){
  this.role = this.auth.getRole();
  console.log(this.role);
}


}
