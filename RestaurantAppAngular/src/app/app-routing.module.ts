import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './checkout/cart/cart.component';
import { PaymentStatusComponent } from './checkout/payment-status/payment-status.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { ChooseFoodComponent } from './core/choose-food/choose-food.component';
import { ChooseLocationComponent } from './core/choose-location/choose-location.component';
import { ChooseRestaurantComponent } from './core/choose-restaurant/choose-restaurant.component';
import { RouteGuardGuard } from './route-guard.guard';
import { LoginComponent } from './user-req/login/login.component';
import { ProfileComponent } from './user-req/profile/profile.component';
import { RegisterComponent } from './user-req/register/register.component';
// import { RegComponent } from './user/reg/reg.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'chooseLocation', component:ChooseLocationComponent, canActivate:[RouteGuardGuard]},
  {path:'registration', component:RegisterComponent},
  {path:'restaurants', component:ChooseRestaurantComponent,canActivate:[RouteGuardGuard]},
  {path:'menu', component:ChooseFoodComponent,canActivate:[RouteGuardGuard]},
  {path:'cartDetails', component:CartComponent,canActivate:[RouteGuardGuard]},
  {path:'payment', component:PaymentComponent,canActivate:[RouteGuardGuard]},
  {path:'profile', component:ProfileComponent,canActivate:[RouteGuardGuard]},
  {path:'paymentStatus', component:PaymentStatusComponent,canActivate:[RouteGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
