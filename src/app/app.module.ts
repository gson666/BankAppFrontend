import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { TransactionsComponent } from './admin/transactions/transactions.component';
import { DepositClientComponent } from './admin/deposit-client/deposit-client.component';
import { WithdrawClientComponent } from './admin/withdraw-client/withdraw-client.component';
import { FundTransferClientComponent } from './admin/fund-transfer-client/fund-transfer-client.component';
import { ManageSystemComponent } from './admin/manage-system/manage-system.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { TransactionsHistoryComponent } from './user/transactions-history/transactions-history.component';
import { DepositComponent } from './user/deposit/deposit.component';
import { WithdrawComponent } from './user/withdraw/withdraw.component';
import { FundTransferComponent } from './user/fund-transfer/fund-transfer.component';
import { ManageAccountComponent } from './user/manage-account/manage-account.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { ThemeToggleComponent } from './shared/components/theme-toggle/theme-toggle.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { LayoutComponent } from './shared/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { InactivityDialogComponent } from './shared/components/inactivity-dialog/inactivity-dialog.component';
import { AccountProfileComponent } from './admin/account-profile/account-profile.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { AccountListComponent } from './admin/account-list/account-list.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AccountUpdateComponent } from './admin/account-update/account-update.component';
import { UserUpdateComponent } from './admin/user-update/user-update.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SideNavComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    TransactionsComponent,
    DepositClientComponent,
    WithdrawClientComponent,
    FundTransferClientComponent,
    ManageSystemComponent,
    TransactionsHistoryComponent,
    DepositComponent,
    WithdrawComponent,
    FundTransferComponent,
    ManageAccountComponent,
    ThemeToggleComponent,
    LayoutComponent,
    InactivityDialogComponent,
    AccountProfileComponent,
    UserProfileComponent,
    AccountListComponent,
    UserListComponent,
    AccountUpdateComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  

  providers: [
    
    {provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
