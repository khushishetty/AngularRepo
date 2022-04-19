import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServicesService } from '../../common-services.service';
import { Food_Location } from '../../models/food_location';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-choose-location',
  templateUrl: './choose-location.component.html',
  styleUrls: ['./choose-location.component.css']
})
export class ChooseLocationComponent implements OnInit {

  food_loc = new Food_Location();


  availableLocations:string[]=[];
  availableFoods:string[]=[];

  constructor(private _service: CommonServicesService, private _router: Router, private _sharedServ: SharedService) { }

  ngOnInit(): void {
    this.getAllLocations();
    this.getAvailableFoods();
  }

  getRestaurantsByLocation() {

    this._service.getRestaurantsByLocationFromRemote(this.food_loc).subscribe(
      data => {
        console.log("response recieved");
        console.log(data);
        this._sharedServ.setMessage(data);
        this._router.navigate(['/restaurants']);
      },
      error => {
        console.log("exception occured");

      }
    );
  }

  getRestaurantsByFood(){
    this._service.getRestaurantsByFoodFromRemote(this.food_loc).subscribe(
      data => {
        console.log("response recieved");
        console.log(data);
        this._sharedServ.setMessage(data);
        this._router.navigate(['/restaurants']);
      },
      error => {
        console.log("exception occured");

      }
    );
  }

  getRestaurantsByLocationAndFood(){
    this._service.getRestaurantsByFoodAndLocationFromRemote(this.food_loc.restLocation, this.food_loc.foodName).subscribe(
      data => {
        console.log("Got rest by food and location");
        console.log(data);
        this._sharedServ.setMessage(data);
        this._router.navigate(['/restaurants']);
      },
      error => {
        console.log("exception occured");

      }
    );
    
  }

  getAllLocations(){
    this._service.getAvailableLocations().subscribe(
      data=>{
        this.availableLocations=data;
      },
      error=>{
        console.log("Couldn't get the locations");
      }
    )
  }

  getAvailableFoods(){
    this._service.getAllAvailableFoods().subscribe(
      data=>{
        this.availableFoods=data;
      }
    )
  }

 

}
