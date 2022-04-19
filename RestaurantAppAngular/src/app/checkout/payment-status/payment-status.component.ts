import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { Cart } from 'src/app/models/cart';
import { UserInfo } from 'src/app/models/userInfo';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {

  constructor(private _router:Router, private _sharedServ:SharedService) { }

  ngOnInit(): void {
    this._sharedServ.setCartObj(new Cart());
    this._sharedServ.setCartItems(new Bill());
  }

  goToHome(){
    console.log(this._sharedServ.getCartItems());
    this._sharedServ.setCartItems(new Bill());
    console.log(this._sharedServ.getCartItems());
    this._router.navigate(["/chooseLocation"]);
  }
  goToLogin(){
    // console.log(this._sharedServ.getCartItems());
    this._sharedServ.setUserInfo(new UserInfo());
    // console.log(this._sharedServ.getCartItems());
    this._router.navigate(["/"]);

  }

}
