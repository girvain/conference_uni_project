import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { TalksService } from '../talks.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-rating-form',
    templateUrl: './rating-form.component.html',
    styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent implements OnInit {
    @Input() talkId: string;
    @Input() talks: object[];
    ratingForm = new FormGroup({
        rating: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
        ]),
    });
  public isSubmited: boolean;


    constructor(
        private talksService: TalksService,
        public authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {

    }

    onSubmit(): void {
        if (this.authService.isLoggedIn) {
            this.talksService.postRating(this.ratingForm.value, this.talkId)
                .subscribe(result => {
                    console.log(this.talkId);
                    console.log(result);
                    console.log(this.ratingForm.value);
                    this.isSubmited = true;
                });
        } else {
            this.router.navigate(['/login/500']);
        }
    }

}
