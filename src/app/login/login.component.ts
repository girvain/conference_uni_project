import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TalksService } from '../talks.service';
import { Router } from '@angular/router';
import {CookieService } from 'ngx-cookie';
import {LoginModel} from './login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


    constructor(
        private talksService: TalksService,
        private router: Router,
        private cookieService: CookieService
    ) { }

  ngOnInit() {
  }

  getCookie(key: string) {
      return this.cookieService.getAll();
  }
    onSubmit(): void {
      const data = new LoginModel('gary@gmail.com', 'password');

        console.log(data);
        this.talksService.login(this.loginForm.value)
            .subscribe(result => {
              console.log('cookie' + this.getCookie('connect.sid'));
              console.log(result);
                this.router.navigate(['/dashboard']);
            });
    }


}
