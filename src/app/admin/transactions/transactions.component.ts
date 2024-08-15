import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/core/services/transaction.service';
import { TransactionDto } from 'src/app/models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
 transactions:TransactionDto[] = [];

  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(transactions=>{
      this.transactions = transactions;
    })
  }
}
