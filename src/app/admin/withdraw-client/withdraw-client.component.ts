import { Component } from '@angular/core';
import { BankService } from 'src/app/core/services/bank.service';

@Component({
  selector: 'app-withdraw-client',
  templateUrl: './withdraw-client.component.html',
  styleUrls: ['./withdraw-client.component.scss']
})
export class WithdrawClientComponent {
  accountId: number = 0;
  amount: number = 0;
  message: string = '';


  constructor(private bank:BankService) { }
withdraw() {
this.bank.withdrawForAcoount(this.accountId,this.amount).subscribe((response)=>{
  this.message = `Successfully withdrawed ${this.amount} to account ID ${this.accountId}. New Balance: ${response.newBalance}`;
})
}

}
