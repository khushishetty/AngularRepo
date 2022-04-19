import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServicesService } from 'src/app/common-services.service';
import { Bill } from 'src/app/models/bill';
import { PaymentDetails } from 'src/app/models/payment';
import { PaymentOutput } from 'src/app/models/paymentOutput';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentDetails = new PaymentDetails();
  bill = new Bill();
  timeLeft=120;
  min=0;
  second=0;
  interval:any;

  constructor(private _sharedServ: SharedService, private _serv: CommonServicesService, private _router: Router) {
  }

  po = new PaymentOutput();

  ngOnInit(): void {
    this.bill = this._sharedServ.getCartItems();
    this.start();

  }
  @HostListener('window:popstate',['$event'])
  start(){
    this.interval=setInterval(()=>{
      if(this.timeLeft>0){
        this.timeLeft--;
        this.min = Math.floor(this.timeLeft/60);
        this.second = this.timeLeft%60;
        
      }else{
        clearInterval(this.interval);
        alert("Timeout!!");
        this.goToCart();
        
      }
    },1000);
  }
  @HostListener('window:popstate',['$event'])
  onPopState(event:any){
    clearInterval(this.interval);
    console.log("Cleared");
  }

  goToCart(){
    this._router.navigate(['/cartDetails']);
  }

  makePayment() {

    this.paymentDetails.restId = this._sharedServ.getCartItems().foodInfos[0].restid;
    this.paymentDetails.userId = this._sharedServ.getUserId().toString();
    this.paymentDetails.totalAmt = this._sharedServ.getCartItems().total;
    console.log(this.paymentDetails.cardHolderName);

    console.log(this._serv.getPaymentStatusFromRemote(this.paymentDetails));


    this._serv.getPaymentStatusFromRemote(this.paymentDetails).subscribe(

      data => {
        this.po = data;
        console.log(this.po.message);
        if (this.po.status == true) {
          console.log(this._sharedServ.getCartItems());
          this._serv.placeOrderFromRemote(this._sharedServ.getCartItems()).subscribe(
            data => {
              console.log(data);
            },
            error => {
              console.log(error);
            }

          );
          clearInterval(this.interval);
          this._router.navigate(["/paymentStatus"]);
        }
      },
      error => {
        console.log(error)
      }
    )

  }

}
