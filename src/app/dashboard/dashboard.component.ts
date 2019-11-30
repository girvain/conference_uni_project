import { Component, Input, Output, EventEmitter, ViewChild, OnInit} from '@angular/core';
import { TalksService } from '../talks.service';
import { TalkSearchComponent } from '../talk-search/talk-search.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  unfilteredTalks: object[];
     talks: object[];
    speakers: string[];
    @ViewChild(TalkSearchComponent, {static: false}) talkSearch: TalkSearchComponent;


  constructor(private talksService: TalksService) { }

  ngOnInit() {
    this.getTalks();
  }

  getTalks(): void {
    this.talksService.getTalks().subscribe( result => {
      this.unfilteredTalks = result;
        // make a deep copy of result talks
        this.copyTalks();
        //this.talks = JSON.parse(JSON.stringify(this.unfilteredTalks));
        // call the child component function
        //this.talkSearch.setSpeakers();
        this.filterBySpeakers();
    });
  }

    filterTalks(): void{
        this.talks.map(talk => {talk.speaker = 'Gavin Ross'});
  }
    filterBySpeakers(): void {
        this.speakers = this.unfilteredTalks.map(talk => talk = talk.speaker);
    }

    copyTalks(): void {
        this.talks = JSON.parse(JSON.stringify(this.unfilteredTalks));
    }


    onTalksChange(formInput: any): void {
        this.copyTalks();
        if (formInput.speaker !== '') {
            this.talks = this.talks.filter(talk => talk.speaker === formInput.speaker)
        }
        if (formInput.session !== '' || formInput.session !== '-- --') {
            this.talks = this.talks.filter(talk => talk.session === formInput.session)
        }
        if (formInput.tag !== '') {
            this.talks = this.talks.filter(talk => talk.tags.includes(formInput.tag));
        }
        //this.talks = localCopyOfTalks;
        console.log(formInput.session);
    }
}
