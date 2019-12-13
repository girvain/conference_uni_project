import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AverageRatingComponent} from '../average-rating/average-rating.component';

import { DisplayTalksComponent } from './display-talks.component';
import {RatingFormComponent} from '../rating-form/rating-form.component';
import {FormGroup, FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

describe('DisplayTalksComponent', () => {
  let component: DisplayTalksComponent;
  let fixture: ComponentFixture<DisplayTalksComponent>;
  let averageRatingComponent: AverageRatingComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ DisplayTalksComponent , AverageRatingComponent, RatingFormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('checkTalkTimes', () => {
        expect(component.checkTalkTimes).Any();
    });
});
