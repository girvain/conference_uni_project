import { Component, OnInit, Input } from '@angular/core';
import { TalksService } from '../talks.service';

@Component({
  selector: 'app-display-talks',
  templateUrl: './display-talks.component.html',
  styleUrls: ['./display-talks.component.css']
})
export class DisplayTalksComponent implements OnInit {
  @Input() talks: object[];

    constructor(private talksService: TalksService) { }

  ngOnInit() {
  }

    addTalk(evt): void {
        let id = { talkId: evt.target.id };

        console.log(id);
        this.talksService.postTalk(id)
            .subscribe(arg => console.log(arg));
    }

    addRating(evt): void {
        let id = { talkId: evt.target.id };
    }

}
