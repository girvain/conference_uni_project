import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TalksService } from '../talks.service';
import { Router } from '@angular/router';

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
        private router: Router
    ) { }

  ngOnInit() {
  }

    onSubmit(): void {
        console.log(this.loginForm);
        this.talksService.login(this.loginForm.value)
            .subscribe(result => {
                //console.log(result)
                this.router.navigate(['/dashboard']);
            });
    }


}
