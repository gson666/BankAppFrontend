import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionDto } from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'https://localhost:7285/api/Transaction';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<TransactionDto[]> {
    return this.http.get<TransactionDto[]>(`${this.apiUrl}`);
  }

  getTransactionById(id: number): Observable<TransactionDto> {
    return this.http.get<TransactionDto>(`${this.apiUrl}/${id}`);
  }

  createTransaction(transactionDto: TransactionDto): Observable<TransactionDto> {
    return this.http.post<TransactionDto>(`${this.apiUrl}`, transactionDto);
  }

  updateTransaction(id: number, transactionDto: TransactionDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, transactionDto);
  }

  deleteTransaction(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
