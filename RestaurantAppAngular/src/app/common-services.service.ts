import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './models/user';
import { Cart } from './models/cart';
import { Food_Location } from './models/food_location';
import { PaymentDetails } from './models/payment';
import { Bill } from './models/bill';
import { UserInfo } from './models/userInfo';
@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  constructor(private _http: HttpClient) {
  }
  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/login/", user);
  }

  public registerUserFromRemote(user:UserInfo):Observable<any>{
    return this._http.post<any>("http://localhost:8080/signup/",user);
  }

  public getUserInfoUsingIdFromRemote(ph:string):Observable<any>{
    return this._http.get<any>("http://localhost:8080/getUser/"+ph);
  }

  public getRestaurantsByFoodFromRemote(loc:Food_Location):Observable<any>{
    console.log("http://localhost:8081/gethotelsbyfood/"+loc.foodName);
    return this._http.get<any>("http://localhost:8081/gethotelsbyfood/"+loc.foodName);
  }

  public getRestaurantsByLocationFromRemote(loc:Food_Location):Observable<any>{
    console.log("http://localhost:8081/"+loc.restLocation);
    return this._http.get<any>("http://localhost:8081/gethotelsbylocation/"+loc.restLocation);
  }

  public getRestaurantsByFoodAndLocationFromRemote(loc:string, food:string):Observable<any>{
    return this._http.get<any>("http://localhost:8081/gethotelsbyfoodandlocation/"+loc+"/"+food+"/");
  }

  public getMenuByRestIdFromRemote(place:string,id:number):Observable<any>{
    // console.log("http://localhost:8081/"+place+"/"+id);
    return this._http.get<any>("http://localhost:8081/getmenubyid"+"/"+id);
  }

  public getBillFromRemote(cart:Cart):Observable<any>{
    return this._http.post<any>("http://localhost:8082/getBill/",cart);
  }
  public getAvailableLocations():Observable<any>{
    return this._http.get<any>("http://localhost:8081/getlocations/");
  }
  public getAllAvailableFoods():Observable<any>{
    return this._http.get<any>("http://localhost:8081/menu/getAllFood/")
  }

  public getPaymentStatusFromRemote(payment:PaymentDetails):Observable<any>{
    return this._http.post<any>("http://localhost:8083/payment/", payment);

  }
  public placeOrderFromRemote(bill:Bill):Observable<any>{
    return this._http.post<any>("http://localhost:8082/placeorder/", bill);
  }

  public getOrderHistoryFromRemote(userId:string):Observable<any>{
    return this._http.get<any>("http://localhost:8082/getorders/"+userId+"/");
  }

  public getOrderDetailsFromRemote(orderid:Number):Observable<any>{
    return this._http.get<any>("http://localhost:8082/getorderinfo/"+orderid);
  }
}
