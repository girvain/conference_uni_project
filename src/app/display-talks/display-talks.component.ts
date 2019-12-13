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
      this.router.navigate(['/login']);
    }

  }


  checkForTimeClash(evt): boolean {
    this.talksService.getMyTalks()
      .subscribe(myTalks => {
        const id = evt.target.id;
        let talkId = {talkId: evt.target.id}; // this is a wrapper for sending the http request
        //console.log(id);
        let talkToBeAdded = this.talks.find(talk => talk.id === id);

        for (let i = 0; i < myTalks.length; i++) {
          console.log('talkToBeAdded' + talkToBeAdded.startTime);
          console.log('myTalks' + myTalks[i].startTime);
          if (talkToBeAdded.id === myTalks[i].id) {
            console.log('talk is already in myTalks');
            return false;
          }
          else if (talkToBeAdded.startTime === myTalks[i].startTime) {
            console.log('CLASH');
            return true;
          }
        }
        this.addTalk(evt);
      });


    // this.talksService.getMyTalks()
    //   .subscribe(myTalks => {
    //
    //     if (myTalks.length === 0) {
    //       this.addTalkWithTalk(talkId);
    //     }
    //
    //     for (let i = 0; i < myTalks.length; i++) {
    //       console.log('talkToBeAdded' + talkToBeAdded.startTime);
    //       console.log('myTalks' + myTalks[i].startTime);
    //       if (talkToBeAdded.startTime !== myTalks[i].startTime) {
    //         return true;
    //       } else if (talkToBeAdded.id === myTalks[i].id) {
    //         console.log('talk is already in myTalks');
    //         return false;
    //       } else {
    //         console.log('talk clashes with other talk');
    //         return false;
    //       }
    //     }
    //   });
  }

  addTalkWithTalk(talk): void {
    if (this.authService.isLoggedIn) {
      //let id = { talkId: evt.target.id };
      //console.log(id);
      this.talksService.postTalk(talk)
        .subscribe(arg => {
          console.log(arg);
        });
    } else {
      this.router.navigate(['/login']);
    }

  }


  checkTalkTimes(evt): void {
    if (this.authService.isLoggedIn) {
      // const id = evt.target.id;
      // let talkId = {talkId: evt.target.id}; // this is a wrapper for sending the http request
      // //console.log(id);
      // let talkToBeAdded = this.talks.find(talk => talk.id === id);
      // let talkToBeAddedStartTime = new Date(talkToBeAdded.startTime); // create a new date object so there is no change to the actual talk object
      // let talkToBeAddedEndTime = new Date(talkToBeAdded.endTime);

      this.talksService.getMyTalks()
        .subscribe(myTalks => {
          const id = evt.target.id;
          let talkId = {talkId: evt.target.id}; // this is a wrapper for sending the http request
          //console.log(id);
          let talkToBeAdded = this.talks.find(talk => talk.id === id);
          let talkToBeAddedStartTime = new Date(talkToBeAdded.startTime); // create a new date object so there is no change to the actual talk object
          let talkToBeAddedEndTime = new Date(talkToBeAdded.endTime);

          if (myTalks.length === 0) {
            // this.addTalkWithTalk(talkId);
          }

          for (let i = 0; i < myTalks.length; i++) {
            // create date obects for each startTime and endTime property to compare
            let myTalkStartTime = new Date(myTalks[i].startTime);
            let myTalkEndTime = new Date(myTalks[i].endTime);
            console.log(myTalks[i]);

            // this will always trigger the first time round
            if (talkToBeAdded.id === myTalks[i].id) {
              console.log('talk is already in myTalks');
            }
            // else if (!(talkToBeAdded.startTime.getTime() > myTalkEndTime.getTime()) ||
            //   !(talkToBeAdded.endTime.getTime() > myTalkStartTime.getTime())) {
            //   this.addTalkWithTalk(myTalks[i]);
            //   console.log('add talk was called!!!');
            //   break;
            // }
            /* Algo sudo code:
              if the talk we are trying to add to the collection:
              - starts before one in the collection starts
              or
              - starts after after one in the collection ends
              and
              - ends after one in the collection starts
              or
              - ends after the one ni cllection ends, this is redundent
             */

            if ((talkToBeAddedStartTime.getTime() < myTalkStartTime.getTime()) ||
              (talkToBeAddedStartTime.getTime() >= myTalkEndTime.getTime()
                // &&
                // (talkToBeAddedEndTime.getTime() <= myTalkStartTime.getTime() )
                // ||
                // talkToBeAddedEndTime.getTime() > myTalkEndTime.getTime())
              )
            ) {
              if (talkId != null) {
                this.addTalkWithTalk(talkId);
              }
              break;
              // console.log(talkToBeAddedStartTime.getTime());
              // console.log(myTalkEndTime.getTime());
              // console.log((talkToBeAddedStartTime.getTime() < myTalkEndTime.getTime()));
              // console.log(`talk confilcts with other talk ${myTalks[i].title}`);
            }
            // else if ((talkToBeAddedEndTime.getTime() > myTalkStartTime.getTime())) {
            //   console.log(`talk confilcts with other talk ${myTalks[i].title}`);
            //
            // }
            else {
              console.log('talk clashes with other talk');
            }
          }
        });
    } else {
      this.router.navigate(['/login']);
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
