import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './admin/books/books.component';
import { UsersComponent } from './admin/users/users.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { ShopbookComponent } from './shopbook/shopbook.component';

const routes: Routes = [{ path: 'admin/users', component: UsersComponent,canActivate:[AuthGaurdService] },
{ path: 'admin/books', component: BooksComponent,canActivate:[AuthGaurdService] },
{ path: 'shop', component: ShopbookComponent,canActivate:[AuthGaurdService] },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
{ path: 'menu', component: MenuComponent,canActivate:[AuthGaurdService] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
