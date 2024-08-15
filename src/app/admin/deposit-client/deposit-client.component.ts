import { Component } from '@angular/core';
import { BankService } from 'src/app/core/services/bank.service';

@Component({
  selector: 'app-deposit-client',
  templateUrl: './deposit-client.component.html',
  styleUrls: ['./deposit-client.component.scss']
})
export class DepositClientComponent {
  accountId: number = 0;
  amount: number = 0;
  message: string = '';
  constructor(private bank: BankService) {}

  deposit() {
    this.bank.depositForAccount(this.accountId, this.amount).subscribe(
      (response) => {
        console.log(response);
        
        this.message = `Successfully deposited ${this.amount} to account ID ${this.accountId}. New Balance: ${response.newBalance}`;
      },
      (error) => {
        this.message = `Error: ${error.error.message}`;
      }
    );
  }
}
