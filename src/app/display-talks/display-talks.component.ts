import { Component, OnInit, Input } from '@angular/core';
import { TalksService } from '../talks.service';

@Component({
  selector: 'app-display-talks',
  templateUrl: './display-talks.component.html',
  styleUrls: ['./display-talks.component.css']
})
export class DisplayTalksComponent implements OnInit {
  @Input() talks: any[];
  @Input() isMyTalks: boolean;

    constructor(private talksService: TalksService) { }

  ngOnInit() {
      console.log(this.talks);
  }

    addTalk(evt): void {
        let id = { talkId: evt.target.id };

        console.log(id);
        this.talksService.postTalk(id)
            .subscribe(arg => console.log(arg));
    }

    removeTalk(evt): void {
        let id = { talkId: evt.target.id };
        let idString = evt.target.id.toString();
        this.talksService.removeTalk(id)
            .subscribe(arg => {
              console.log(arg);
              // Remove item from the DOM
              this.talks = this.talks.filter(item => item.id !== idString);
              console.log(this.talks);
            });
    }


}
