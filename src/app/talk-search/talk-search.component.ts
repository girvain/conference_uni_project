import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-talk-search',
  templateUrl: './talk-search.component.html',
  styleUrls: ['./talk-search.component.css']
})
export class TalkSearchComponent implements OnInit {
  searchForm = new FormGroup({
    speaker: new FormControl(''),
    session: new FormControl(''),
    tag: new FormControl(''),
  });

    @Output() talksChange: EventEmitter<any>;
    @Input() talks;
    @Input() speakers: string[];
    @Input() selectOptions: Object;
    sessions: string[];
    tags: string[];

    constructor() {
      this.talksChange = new EventEmitter();
    }

  ngOnInit() {
  }

    setSpeakers(): void {
        //this.speakers = this.talks.map(talk => talk.speakers = 'GAvin Ross');
        console.log(this.talks);
    }

    onSubmit(): void {
        this.talksChange.emit(this.searchForm.value);
        console.log(this.searchForm.value);
        console.log(this.talks);
  }
}
