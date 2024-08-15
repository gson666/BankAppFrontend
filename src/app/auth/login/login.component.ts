import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

role:string = '';
userName:string | null= '';
type:string = "password";
isText:boolean =false;
eyeIcon :string = "fa-eye-slash";
loginForm!:FormGroup;


constructor(private auth:AuthService,private router:Router,private fb: FormBuilder){}

ngOnInit():void{
  this.loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
}

hideShowPass(){
  this.isText = !this.isText;
  this.isText?this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  this.isText?this.type = "text" : this.type = "password";
}

login(){
  if(this.loginForm.valid){
this.auth.login(this.loginForm.value).subscribe(()=>{
this.role = this.auth.getRole();
this.userName = this.auth.getUserName();
console.log(this.role,this.userName);
if(this.role === 'Admin'){
  this.router.navigate(['/admin-dashboard']);
}else if(this.role === 'User'){
  this.router.navigate(['/user-dashboard']);
}
});
}
}
}
