import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
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
    selectOptions: object = {};
    @ViewChild(TalkSearchComponent, { static: false }) talkSearch: TalkSearchComponent;


    constructor(private talksService: TalksService) { }

    ngOnInit() {
        this.getTalks();
    }

    getTalks(): void {
        this.talksService.getTalks().subscribe(result => {
            this.unfilteredTalks = result;
            // make a deep copy of result talks
            this.copyTalks();
            //this.talks = JSON.parse(JSON.stringify(this.unfilteredTalks));
            this.filterBySpeakers();
        });
    }

    filterBySpeakers(): void {
        //this.speakers = this.unfilteredTalks.map(talk => talk = talk.speaker);
        this.selectOptions.speakers = this.unfilteredTalks.map(talk => talk = talk.speaker);
        console.log(this.selectOptions);
    }

    copyTalks(): void {
        this.talks = JSON.parse(JSON.stringify(this.unfilteredTalks));
    }



    onTalksChange(formInput: any): void {
        this.copyTalks();
        if (formInput.speaker !== '' && formInput.speaker !== '-- --') {
            this.talks = this.talks.filter(talk => talk.speaker === formInput.speaker)
        }
        if (formInput.session !== '' && formInput.session !== '-- --') {
            this.talks = this.talks.filter(talk => talk.session === formInput.session)
        }
        if (formInput.tag !== '' && formInput.tag !== '-- --') {
            this.talks = this.talks.filter(talk => talk.tags.includes(formInput.tag));
        }
    }
}
