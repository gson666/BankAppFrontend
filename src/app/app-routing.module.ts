import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ManageSystemComponent } from './admin/manage-system/manage-system.component';
import { WithdrawClientComponent } from './admin/withdraw-client/withdraw-client.component';
import { DepositClientComponent } from './admin/deposit-client/deposit-client.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { TransactionsComponent } from './admin/transactions/transactions.component';
import { authGuard } from './core/guards/auth.guard';
import { FundTransferClientComponent } from './admin/fund-transfer-client/fund-transfer-client.component';
import { TransactionsHistoryComponent } from './user/transactions-history/transactions-history.component';
import { DepositComponent } from './user/deposit/deposit.component';
import { WithdrawComponent } from './user/withdraw/withdraw.component';
import { FundTransferComponent } from './user/fund-transfer/fund-transfer.component';
import { ManageAccountComponent } from './user/manage-account/manage-account.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AccountListComponent } from './admin/account-list/account-list.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { AccountProfileComponent } from './admin/account-profile/account-profile.component';
import { AccountUpdateComponent } from './admin/account-update/account-update.component';
import { UserUpdateComponent } from './admin/user-update/user-update.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      // Admin routes
      { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
      { path: 'transactions', component: TransactionsComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
      { path: 'deposit-client', component: DepositClientComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
      { path: 'withdraw-client', component: WithdrawClientComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
      { path: 'fund-transfer-client', component: FundTransferClientComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
      { path: 'manage-system', component: ManageSystemComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
      { path: 'user-list', component: UserListComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
      { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
      { path: 'user-update/:id', component: UserUpdateComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
      { path: 'account-list', component: AccountListComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
      { path: 'account-profile/:id', component: AccountProfileComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
      { path: 'account-update/:id',component:AccountUpdateComponent,canActivate:[authGuard],data:{roles:['Admin']}},

      // User routes
      { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [authGuard], data: { roles: ['User'] } },
      { path: 'transactions-history', component: TransactionsHistoryComponent, canActivate: [authGuard], data: { roles: ['User'] } },
      { path: 'deposit', component: DepositComponent, canActivate: [authGuard], data: { roles: ['User'] } },
      { path: 'withdraw', component: WithdrawComponent, canActivate: [authGuard], data: { roles: ['User'] } },
      { path: 'fund-transfer', component: FundTransferComponent, canActivate: [authGuard], data: { roles: ['User'] } },
      { path: 'manage-account', component: ManageAccountComponent, canActivate: [authGuard], data: { roles: ['User'] } }
    ]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
