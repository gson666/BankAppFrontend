export interface TransactionDto {
    transactionId: number;
    name: string;
    amount: number;
    paymentChannel: string;
    category: string;
    type: string;
    createdDate: Date;
    senderAccountId: number;
    receiverAccountId: number;
  }
  