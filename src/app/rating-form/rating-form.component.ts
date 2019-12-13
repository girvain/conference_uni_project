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
  private isSubmited: boolean;


    constructor(
        private talksService: TalksService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {

    }

    // TODO: change subscribe callback to find the local copy of the talk and change
    // the rating to the new rating. Add an if display for your rating to the cards.
    /**
     * TODO: add an "attend talk?" button to each card and have a seperate route for
     * the talks the user is planning to attend, along with time logic.
     */
    /**
     * TODO: add a display my talks route to view the users talks along with an if
     * statement to display something if they arent attending any talks. Also add a remove
     * talk feature.
     */
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

    /** 1.have the id of the talk passed in with @Input from app-display-talks
     * to this.
     * 2. make a binding form the template select to this.rating
     * 3. Use the talkServie to do the request and create the post
     * object containing the talkId and the request.
     */
}
