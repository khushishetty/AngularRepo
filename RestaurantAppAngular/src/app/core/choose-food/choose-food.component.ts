import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';
import { CommonServicesService } from '../../common-services.service';
import { Bill } from '../../models/bill';
import { Cart } from '../../models/cart';
import { FoodList } from '../../models/foodlist';
import { MenuClass } from '../../models/menu';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-choose-food',
  templateUrl: './choose-food.component.html',
  styleUrls: ['./choose-food.component.css']
})
export class ChooseFoodComponent implements OnInit {

  menuList: MenuClass[] = [];
  food_list: FoodList[] = [];
  cart_obj: Cart = new Cart();
  selItems = new Map();
  userid: string = ""
  bill = new Bill();
  alertDisplay = false;
  noOfFoods: number = 0
  rating:number=5;
  flag:boolean=false;
  constructor(private _sharedServ: SharedService, private _serv: CommonServicesService, private _router: Router) {
    this.menuList = this._sharedServ.getMenu();
    console.log("recieved");
    console.log(this.menuList);
  }

  ngOnInit(): void {
    this.food_list = this._sharedServ.getCartObj().fooddetails;
    console.log(this.food_list);
    
  }

  addOrRemove(itemid: number, qty: number, ischecked: boolean) {
    if (!ischecked)
      this.selItems.delete(itemid);
    else
      this.selItems.set(itemid, qty);
    console.log(this.selItems)

  }
  updateQty(itemid: number, qty: number) {
   
    this.selItems.delete(itemid);
    console.log(this.selItems)

  }
  showDetails() {
    console.log(this.selItems);
    for (let [key, val] of this.selItems) {
     
      const food = new FoodList();
      food.foodId = key;
      food.quantity = val;
      
      if(!this.food_list.includes(food, 0)){
        
        this.food_list.forEach(function(ele, ind, list){
          if(ele.foodId==food.foodId)
          {
              list.splice(ind, 1);
          }
      
        }
          
        );
        this.food_list.push(food);
      }
      
    }
    console.log(this.food_list);
    this.userid = this._sharedServ.getUserId();
    console.log(this.userid);

    this.cart_obj.userId = this.userid;
    this.cart_obj.fooddetails = this.food_list;

    console.log(this.cart_obj);
    this._sharedServ.setCartObj(this.cart_obj);

    this._serv.getBillFromRemote(this.cart_obj).subscribe(
      data => {
        console.log("response recieved");
        console.log(data);
        this.bill = data;
        console.log(this.bill.userinfo);
        console.log(this.bill.foodInfos);
        console.log(this.bill.quantityList);
        console.log(this.bill.total);
        this._sharedServ.setCartItems(this.bill);
        this.showCartDetails();
      },
      error => {
        console.log("exception occured");
      }
    );


  }

  showAlert() {
    this.alertDisplay = !this.alertDisplay;

  }
  showCartDetails() {
    this._router.navigate(["/cartDetails"]);
  }

}
