import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseFoodComponent } from './choose-food/choose-food.component';
import { ChooseLocationComponent } from './choose-location/choose-location.component';
import { ChooseRestaurantComponent } from './choose-restaurant/choose-restaurant.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ChooseFoodComponent,
    ChooseLocationComponent,
    ChooseRestaurantComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule
  ],
  exports:[
    ChooseFoodComponent,
    ChooseLocationComponent,
    ChooseRestaurantComponent
  ]
})
export class CoreModule { }
