import {Component, OnInit, Input} from '@angular/core';
import {TalksService} from '../talks.service';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-talks',
  templateUrl: './display-talks.component.html',
  styleUrls: ['./display-talks.component.css']
})
export class DisplayTalksComponent implements OnInit {
  @Input() talks: any[];
  @Input() isMyTalks: boolean;

  constructor(
    private talksService: TalksService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    console.log(this.talks);
  }

  addTalk(evt): void {
    //console.log(this.checkForTimeClash(evt));
    if (this.authService.isLoggedIn) {
      let id = {talkId: evt.target.id};
      this.talksService.postTalk(id)
        .subscribe(arg => {
          console.log(arg);
        });

    } else {
      this.router.navigate(['/login/500']);
    }

  }


  checkForTimeClash(evt): void {
    if (this.authService.isLoggedIn) {
      this.talksService.getMyTalks()
        .subscribe(myTalks => {
          const id = evt.target.id;
          // const talkId = {talkId: evt.target.id}; // this is a wrapper for sending the http request
          let talkToBeAdded = this.talks.find(talk => talk.id === id);
          console.log(talkToBeAdded);
          for (let i = 0; i < myTalks.length; i++) {
            if (talkToBeAdded.id === myTalks[i].id) {
              console.log('talk is already in myTalks');
              // add a warning msg to the talk object that can't be added so it can inform client
              talkToBeAdded.warningMsg = 'This talk is already in My Talks';
              return false;
            }
            else if (talkToBeAdded.startTime === myTalks[i].startTime) {
              console.log('CLASH');
              talkToBeAdded.warningMsg = `This talk clashes with the talk from your My Talks called: \n"${myTalks[i].title}"
            \n Please remove it from My Talks to add this current talk`;
              return true;
            }
          }
          // possibly add null check here
          this.addTalk(evt);
        });
    } else {
      this.router.navigate(['/login/500']);
    }
  }


  removeTalk(evt): void {
    let id = {talkId: evt.target.id};
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
