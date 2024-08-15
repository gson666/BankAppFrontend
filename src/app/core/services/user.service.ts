import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { UserDto } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiurl = 'https://localhost:7285/api/User';
  constructor(private http:HttpClient) { }



  getUsers(includeDeleted: boolean = true):Observable<UserDto[]>{
    return this.http.get<UserDto[]>(`${this.apiurl}?includeDeleted=${includeDeleted}`);
  }
  getUserById(userId:string,includeDeleted: boolean = false):Observable<UserDto>{
    return this.http.get<UserDto>(`${this.apiurl}/${userId}?includeDeleted=${includeDeleted}`);
  }
  assignRole(userId:string,role:string):Observable<any>{
    return this.http.post<any>(`${this.apiurl}/assign-role`,{userId,role});
  }
  updateUser(userId:string,user:UserDto):Observable<UserDto>{
    return this.http.put<UserDto>(`${this.apiurl}/${userId}`,user);
  }
  deActivateUser(userId:string):Observable<any>{
    return this.http.put<any>(`${this.apiurl}/deactivate/${userId}`,{});
  }
  activateUser(userId:string):Observable<any>{
    return this.http.put<any>(`${this.apiurl}/activate/${userId}`,{});
  }

}
