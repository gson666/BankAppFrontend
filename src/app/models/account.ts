export interface AccountDto {
    accountId: number;
    name: string;
    currentBalance: number;
    availableBalance: number;
    maxCredit:number;
    institutionId: string;
    type: string;
    userId: string;
    isDeleted: boolean;
  }
  