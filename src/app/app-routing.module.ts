import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthGuard } from './services/auth.guard';

import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';




const routes: Routes = [
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  { path:'login', component: LoginComponent}, 
  { path: 'signup', component: SignupComponent },   
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, 
  { path: 'products', component: ProductsComponent },
  { path:'cart', component: CartComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
