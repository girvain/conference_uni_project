import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TalksService } from '../talks.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    loginForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        password2: new FormControl(''),
    });


    constructor(
        private talksService: TalksService,
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
    }

    onSubmit(): void {
        this.talksService.register(this.loginForm.value)
            .subscribe(result => {
                this.router.navigate(['/login']);
            });
    }

    // onSubmit(): void {
    //     this.authService.login(this.loginForm.value).subscribe(() => {

    //         if (this.authService.isLoggedIn) {
    //             // Get the redirect URL from our auth service
    //             // If no redirect has been set, use the default
    //             let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/dashboard';

    //             // Redirect the user
    //             this.router.navigateByUrl(redirect);
    //         }
    //     });
    // }


}
