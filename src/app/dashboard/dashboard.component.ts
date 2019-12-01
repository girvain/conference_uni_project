import { Component, OnInit } from '@angular/core';
import { TalksService } from '../talks.service';
import { SelectOptions } from './select-options';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    unfilteredTalks: any[];
    talks: any[];
    selectOptions: SelectOptions;

    constructor(private talksService: TalksService) { }

    ngOnInit() {
        this.getTalks();
        this.selectOptions = new SelectOptions();
    }

    getTalks(): void {
        this.talksService.getTalks().subscribe(result => {
            this.unfilteredTalks = result;
            // make a deep copy of result talks
            this.copyTalks();
            this.setUpSelectOptions();
        });
    }

    setUpSelectOptions(): void {
        this.selectOptions.speakers = this.unfilteredTalks.map(talk => talk = talk.speaker);
        this.selectOptions.sessions = this.unfilteredTalks.map(talk => talk = talk.session);
        this.selectOptions.tags = this.unfilteredTalks.map(talk => talk = talk.tags);
        // remove duplicates from sessions and tags
        this.selectOptions.sessions = [...new Set(this.selectOptions.sessions)];
        this.selectOptions.tags = this.selectOptions.tags.reduce((a, b) => a.concat(b), []);
        this.selectOptions.tags = [...new Set(this.selectOptions.tags)];
        console.log(this.selectOptions.tags);
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
