import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-talks',
  templateUrl: './display-talks.component.html',
  styleUrls: ['./display-talks.component.css']
})
export class DisplayTalksComponent implements OnInit {
  @Input() talks: object[];

  constructor() { }

  ngOnInit() {
  }

}
