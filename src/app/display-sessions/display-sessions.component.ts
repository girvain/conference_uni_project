import { Component, OnInit } from '@angular/core';
import {TalksService} from '../talks.service';

@Component({
  selector: 'app-display-sessions',
  templateUrl: './display-sessions.component.html',
  styleUrls: ['./display-sessions.component.css']
})
export class DisplaySessionsComponent implements OnInit {

  sessions: any[];

  constructor(private talksService: TalksService) { }

  ngOnInit() {
    this.getSessions();
  }

  getSessions(): void {
    this.talksService.getSessions()
      .subscribe(sessions => {
        this.sessions = sessions;
        console.log(sessions);
      });
  }

}
