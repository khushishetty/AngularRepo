import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from 'src/app/common-services.service';
import { OrderDetails } from 'src/app/models/orderDetails';
import { OrderHistory_1 } from 'src/app/models/orderHistory_1';
import { UserInfo } from 'src/app/models/userInfo';
import { UserInfoSecure } from 'src/app/models/userInfoSecure';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user= new UserInfoSecure();
  orderHistList: OrderHistory_1[]=[]
  orderdetailsList: OrderDetails[]=[];
  orderId:Number=0;

  constructor(private _shared_serv:SharedService, private _serv:CommonServicesService) {
    this._shared_serv.setIsProfile(true);
   }

  ngOnInit(): void {
    this.user = this._shared_serv.getUserInfo();
    this.getOrdersHistory();
  }

  getOrdersHistory()
  {
    this._serv.getOrderHistoryFromRemote(this.user.phoneNo).subscribe(
      data=>{
        this.orderHistList=data;
        console.log(data);

      },
      error=>{
        console.log(error);

      }
    )
  }
  showDetails(orderid:Number){
    this.orderId=orderid;
    this._serv.getOrderDetailsFromRemote(orderid).subscribe(
      data=>{
        this.orderdetailsList=data;
        console.log(data);

      },
      error=>{
        console.log(error);
      }
    )
  }

}
