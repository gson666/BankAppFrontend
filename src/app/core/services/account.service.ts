import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDto } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'https://localhost:7285/api/Account';

  constructor(private http: HttpClient) {}

  getAccounts(includeDeleted: boolean = true): Observable<AccountDto[]> {
    return this.http.get<AccountDto[]>(`${this.apiUrl}?includeDeleted=${includeDeleted}`);
  }

  getAccountById(id: number, includeDeleted: boolean = false): Observable<AccountDto> {
    return this.http.get<AccountDto>(`${this.apiUrl}/${id}?includeDeleted=${includeDeleted}`);
  }

  createAccount(accountDto: AccountDto): Observable<AccountDto> {
    return this.http.post<AccountDto>(`${this.apiUrl}`, accountDto);
  }

  updateAccount(id: number, accountDto: AccountDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, accountDto);
  }

  deleteAccount(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deactivateAccount(id: number): Observable<AccountDto> {
    return this.http.put<AccountDto>(`${this.apiUrl}/deactivate/${id}`, {});
  }

  countAccounts(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count-accounts`);
  }
}
