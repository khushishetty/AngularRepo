import { Injectable } from '@angular/core';
import { mergeScan } from 'rxjs';
import { Bill } from '../models/bill';
import { Cart } from '../models/cart';
import { MenuClass } from '../models/menu';
import { RestaurantInfo } from '../models/restaurantInfo';
import { UserInfo } from '../models/userInfo';
import { UserInfoSecure } from '../models/userInfoSecure';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  restList: RestaurantInfo[] = [];
  menuList: MenuClass[] = [];
  userid: string = "";
  userObj = new UserInfoSecure();
  bill = new Bill();
  paymentStatus: string = "";
  isProfile: boolean = false;
  cartObject = new Cart();

  constructor() { }

  setMessage(data: RestaurantInfo[]) {
    this.restList = data
  }

  getMessage() {
    return this.restList
  }

  setMenu(data: MenuClass[]) {
    this.menuList = data;
  }
  getMenu() {
    return this.menuList;
  }

  setUserId(id: string) {
    this.userid = id;
  }
  getUserId() {
    return this.userid;
  }

  getCartItems() {
    return this.bill;
  }
  setCartItems(cart: Bill) {
    this.bill = cart;

  }
  setUserInfo(data: UserInfoSecure) {
    
    this.userObj = data;
    console.log("Secure obj : ");
    console.log(this.userObj);
  }
  getUserInfo() {
    return this.userObj;
  }

  getPaymentStatus() {
    return this.paymentStatus;
  }
  setPaymentStatus(msg: string) {
    this.paymentStatus = msg;
  }
  getIsProfile() {
    return this.isProfile;
  }
  setIsProfile(flag: boolean) {
    this.isProfile = flag;
  }

  getCartObj(){
    return this.cartObject;
  }
  setCartObj(obj:Cart){
    this.cartObject=obj;
  }

  resetAllValues(){
    this.setMessage([]);
    this.setMenu([]);
    this.setUserId("");
    this.setCartItems(new Bill());
    this.setPaymentStatus("");
    this.setCartObj(new Cart());
  }
}
