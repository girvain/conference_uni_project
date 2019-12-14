import {Component, Input, OnInit} from '@angular/core';
import {TalksService} from '../talks.service';

@Component({
  selector: 'app-my-talks',
  templateUrl: './my-talks.component.html',
  styleUrls: ['./my-talks.component.css']
})
export class MyTalksComponent implements OnInit {
  talks: any[];

  constructor(private talksService: TalksService) { }

  ngOnInit() {
    this.getMyTalks();
  }

  getMyTalks(): void {
        this.talksService.getMyTalks()
      .subscribe(result => {
        // Check that the result isn't null as a new user won't have any talks to GET
        // which will be a null
        if (result !== null) {
          this.talks = result;
        }
        console.log(result);
        console.log(this.talks);
      });
  }
}
