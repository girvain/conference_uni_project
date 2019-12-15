import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {TalksService} from '../talks.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginModel} from './login-model';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });
  private errorMsg: string;
  private errorMsg2: { title: string; dsc: string };


  constructor(
    private talksService: TalksService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getMessageParams();
  }

  getMessageParams(): void {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.errorMsg = params.id;
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: x => {
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/dashboard';

          // Redirect the user
          this.router.navigateByUrl(redirect);
        }
      },
      error: err => {
        console.log(err);
        this.errorMsg2 = {
          title: err.statusText,
          dsc: err.error.errors[0].msg,
        };
      },
      complete: () => {
        console.log('complete');
      }
    });
  }


}
