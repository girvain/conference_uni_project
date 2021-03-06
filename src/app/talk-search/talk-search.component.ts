import {Component, EventEmitter, Output, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

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
  @Input() selectOptions: any;
  sessions: string[];
  tags: string[];

  constructor() {
    this.talksChange = new EventEmitter();
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.talksChange.emit(this.searchForm.value);
    console.log(this.searchForm.value);
    // console.log(this.talks);
  }
}
