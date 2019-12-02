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
