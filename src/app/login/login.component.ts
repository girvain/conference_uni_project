import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TalksService } from '../talks.service';
import { Router } from '@angular/router';
import { LoginModel } from './login-model';
import { AuthService } from '../auth/auth.service';

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
        private authService: AuthService
    ) { }

    ngOnInit() {
    }

    // onSubmit(): void {
    //   const data = new LoginModel('gary@gmail.com', 'password');

    //     console.log(data);
    //     this.talksService.login(this.loginForm.value)
    //         .subscribe(result => {
    //           console.log('cookie' + this.getCookie('connect.sid'));
    //           console.log(result);
    //             this.router.navigate(['/dashboard']);
    //         });
    // }

    onSubmit(): void {
        this.authService.login(this.loginForm.value).subscribe(() => {

            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/dashboard';

                // Redirect the user
                this.router.navigateByUrl(redirect);
            }
        });
    }

    logout(): void {
        this.authService.login(this.loginForm.value).subscribe(() => {

            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/dashboard';

                // Redirect the user
                this.router.navigateByUrl(redirect);
            }
        });
    }


}
