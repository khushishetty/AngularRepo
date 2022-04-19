import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServicesService } from 'src/app/common-services.service';
import { User } from 'src/app/models/user';
import { SharedService } from 'src/app/shared/shared.service';
import { NgForm } from '@angular/forms';
import { UserRegStatus } from 'src/app/models/userRegStatus';
import { RouteGuardGuard } from 'src/app/route-guard.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = "";
  login_status = new UserRegStatus();

  constructor(private _service: CommonServicesService, private _router: Router, private _sharedServ: SharedService) { }

  ngOnInit(): void {

  }
  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        this.login_status = data;
        console.log("response recieved");
        console.log(this.login_status);
        if (this.login_status.status==false) {
          this.msg = this.login_status.message;
        }
        else {
          this._sharedServ.setUserId(this.login_status.message);
          this._service.getUserInfoUsingIdFromRemote(this.login_status.message).subscribe(
            data => {
              this._sharedServ.setUserInfo(data);
              console.log(this._sharedServ.getUserInfo());
              // this.hasLoggedIn();
              console.log(this.login_status.status)
              this._router.navigate(['/chooseLocation']);
            },
            error => {
              console.log(error);
            }
          );

        }


      },
      error => {
        console.log(error);
        // this.msg = "Bad credentials";

      }
    );
  }
  hasLoggedIn(){
    return this.login_status.status;
  }

  goToRegistration() {
    this._router.navigate(['/registration']);
  }

}
