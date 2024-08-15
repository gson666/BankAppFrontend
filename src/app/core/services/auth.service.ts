import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import { UserLoginDto } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7285/api/User';
  private currentUser:any;

  constructor(private http:HttpClient,private router:Router) { }

  login(user:UserLoginDto):Observable<{ token: string, role: string }>{
    return this.http.post<{ token: string, role: string }>(`${this.apiUrl}/login`,user).pipe(
      tap(user=>{
        this.currentUser = user;
        localStorage.setItem('user',JSON.stringify(user));
        localStorage.setItem('token',user.token);

        const decodedToken :any = jwtDecode(user.token);
        const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
        const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        if(userId){
          localStorage.setItem('userId',userId);
          localStorage.setItem('role',role);
        }
      })
    );
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.clear();
    console.clear();
    this.router.navigate(['/login']);
  }
  getCurrentUser() {
    return this.currentUser || JSON.parse(localStorage.getItem('user')!);
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('token')!==null;
  }
  getRole(): string {
    return localStorage.getItem('role')!;
  }
  getToken(){
    return localStorage.getItem('token');
  }
  getUserName(){
    return localStorage.getItem('userName');
  }
  getNumberOfUsers():Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/user-count`);
  }


}


