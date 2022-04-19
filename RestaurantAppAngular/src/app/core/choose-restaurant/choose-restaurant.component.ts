import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServicesService } from '../../common-services.service';
import { RestaurantInfo } from '../../models/restaurantInfo';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-choose-restaurant',
  templateUrl: './choose-restaurant.component.html',
  styleUrls: ['./choose-restaurant.component.css']
})
export class ChooseRestaurantComponent implements OnInit {

  restList: RestaurantInfo[];
  rating:number=0;
  constructor(private _sharedServ:SharedService, private _serv:CommonServicesService, private _router:Router) {
    this.restList=this._sharedServ.getMessage();
    console.log("recieved" );
    console.log(this.restList);
   }

  ngOnInit(): void {
  }

  getMenuByRestId(place:string, restid:number){
    console.log(restid);
   this._serv.getMenuByRestIdFromRemote(place, restid).subscribe(
    data=>{
      console.log("response recieved");
       console.log(data);
       this._sharedServ.setMenu(data);
       this._router.navigate(['/menu']);
    },
    error=>{
      console.log("exception occured");
      
    }
  );
  }

  getRoundedNumber(num:number){
    return (Math.round(num));
  }
}
