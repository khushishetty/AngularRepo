import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';

import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { PaymentStatusComponent } from './payment-status/payment-status.component';

@NgModule({
  declarations: [
    PaymentComponent,
    CartComponent,
    PaymentStatusComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    CommonComponentsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  exports:[
    PaymentComponent,
    CartComponent,
    PaymentStatusComponent
  ]
})
export class CheckoutModule { }
