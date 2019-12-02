import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TalksService } from '../talks.service';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent implements OnInit {
  @Input() talkId: string;
  @Input() talks: object[];
  ratingForm = new FormGroup({
    rating: new FormControl(''),
  });


    constructor(private talksService: TalksService) { }

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
      this.talksService.postRating(this.ratingForm.value, this.talkId)
          .subscribe(result => console.log(result));
    }

    /** 1.have the id of the talk passed in with @Input from app-display-talks
     * to this.
     * 2. make a binding form the template select to this.rating
     * 3. Use the talkServie to do the request and create the post
     * object containing the talkId and the request.
     */
}
