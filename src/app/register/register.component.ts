import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
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
        name: new FormControl('', [
          Validators.required,
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(7),
        ]),
        password2: new FormControl('', [
          Validators.required,
          Validators.minLength(7),
        ]),
    });
  private errorMsg: { title: string; dsc: string };


    constructor(
        private talksService: TalksService,
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
    }

    // onSubmit(): void {
    //     this.talksService.register(this.loginForm.value)
    //         .subscribe(result => {
    //             this.router.navigate(['/login']);
    //         });
    // }

  get name() {
    return this.loginForm.get('name');
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  get password2() {
    return this.loginForm.get('password2');
  }


  onSubmit(): void {
    this.talksService.register(this.loginForm.value).subscribe({
      next: x => {
        this.router.navigate(['/login']);
      },
      error: err => {
        console.log(err);
        this.errorMsg = {
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
