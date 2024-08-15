import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDto } from 'src/app/models/account';
import { TransactionDto } from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private apiUrl = 'https://localhost:7285/api/Bank';

  constructor(private http: HttpClient) {}

  getAccountsByUserId(userId: string, includeDeleted: boolean = false): Observable<AccountDto[]> {
    return this.http.get<AccountDto[]>(`${this.apiUrl}/user/${userId}/accounts?includeDeleted=${includeDeleted}`);
  }

  getAccountById(accountId: number, includeDeleted: boolean = false): Observable<{ account: AccountDto, transactions: TransactionDto[] }> {
    return this.http.get<{ account: AccountDto, transactions: TransactionDto[] }>(`${this.apiUrl}/accounts/${accountId}?includeDeleted=${includeDeleted}`);
  }

  createAccount(accountDto: AccountDto): Observable<AccountDto> {
    return this.http.post<AccountDto>(`${this.apiUrl}/accounts`, accountDto);
  }

  updateAccount(accountId: number, accountDto: AccountDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/accounts/${accountId}`, accountDto);
  }

  deleteAccount(accountId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/accounts/${accountId}`);
  }

  deactivateAccount(accountId: number): Observable<AccountDto> {
    return this.http.put<AccountDto>(`${this.apiUrl}/deactivate/${accountId}`, {});
  }

  createTransaction(transactionDto: TransactionDto): Observable<TransactionDto> {
    return this.http.post<TransactionDto>(`${this.apiUrl}/transactions`, transactionDto);
  }

  getTransactionsByAccountId(accountId: number): Observable<TransactionDto[]> {
    return this.http.get<TransactionDto[]>(`${this.apiUrl}/accounts/${accountId}/transactions`);
  }

  transferMoney(transactionDto: TransactionDto): Observable<TransactionDto> {
    return this.http.post<TransactionDto>(`${this.apiUrl}/transfer`, transactionDto);
  }
  depositForAccount(accountId:number,amount:number): Observable<any>{
    return this.http.post(`${this.apiUrl}/accounts/${accountId}/deposit`,amount);
  }
  withdrawForAcoount(accountId:number,amount:number):Observable<any>{
    return this.http.post(`${this.apiUrl}/accounts/${accountId}/withdraw`,amount);
  }

}
