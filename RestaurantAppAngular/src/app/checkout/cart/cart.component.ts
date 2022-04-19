import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { FoodList } from 'src/app/models/foodlist';
import { Bill } from '../../models/bill';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bill= new Bill();
  item_qty:number=0;
  isEmpty:string="";
  food_list: FoodList[] = [];
  cartObject = new Cart();

  constructor(private _sharedServ:SharedService, private _route:Router) { 
    
  }

  ngOnInit(): void {
    this.bill=this._sharedServ.getCartItems();
    console.log(this.bill);
    this.item_qty=this.bill.foodInfos.length;
    if(this.item_qty==0){
      this.isEmpty="Sorry your cart is empty!";
    }
    else{
      this.isEmpty="";
    }

    this.food_list = this._sharedServ.getCartObj().fooddetails;
    this.cartObject = this._sharedServ.getCartObj();
    
    console.log(this.food_list);
  }

  goToPayments(){
    this._route.navigate(['/payment']);

  }
  removeFoodItem(indexOfElement:number){
    this.bill.total = this.bill.total - this.bill.foodInfos[indexOfElement].price*this.bill.quantityList[indexOfElement];
    this.bill.foodInfos.splice(indexOfElement,1);
    this.bill.quantityList.splice(indexOfElement,1);    

    this.food_list.splice(indexOfElement, 1);
    this._sharedServ.setCartItems(this.bill);

    this.cartObject.fooddetails = this.food_list;

    this._sharedServ.setCartObj(this.cartObject);

    
    
    this.item_qty--;
    if(this.item_qty==0){
      this.isEmpty="Sorry your cart is empty!";
    }
    else{
      this.isEmpty="";
    }

    console.log(this.bill);
  }

}
