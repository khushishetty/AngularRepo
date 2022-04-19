import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName: string = "";
  isProfile!: boolean;

  constructor(private _serv: SharedService, private _router: Router) {

  }

  ngOnInit(): void {
    this.userName = this._serv.getUserInfo().userName;
  }
  goToProfile() {
    this._router.navigate(["/profile"]);

  }
  logout(){
    this._serv.resetAllValues();
    this._router.navigate(["/"]);
    
  }

}
