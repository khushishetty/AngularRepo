import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserReqModule } from './user-req/user-req.module';
import { CheckoutModule } from './checkout/checkout.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouteGuardGuard } from './route-guard.guard';
import { SharedService } from './shared/shared.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserReqModule,
    CheckoutModule,
    CommonComponentsModule,
    BrowserAnimationsModule,
    CoreModule,
    FontAwesomeModule
  ],
  providers: [RouteGuardGuard, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
