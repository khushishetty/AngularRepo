import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { CommonServicesService } from 'src/app/common-services.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRegStatus } from 'src/app/models/userRegStatus';
import { UserInfo } from 'src/app/models/userInfo';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userReg = new UserInfo();
  msg = "";
  regStatus = new UserRegStatus();
  repass = "";
  constructor(private _service: CommonServicesService, private _router: Router) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this._router.navigate(['/login']);
  }
  registerUser() {
    if (this.repass != this.userReg.password) {
      this.msg = this.regStatus.message = "Passwords donot match!";
      
      this.regStatus.status = false;
    }
    else {
      this._service.registerUserFromRemote(this.userReg).subscribe(
        data => {
          this.regStatus = data;
          console.log(this.regStatus.message);
          this.msg = this.regStatus.message;

        },
        error => {
          console.log(error);
        }

      )
    }
  }


}
