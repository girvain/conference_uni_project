import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFormComponent } from './rating-form.component';
import {Form, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DisplayTalksComponent} from '../display-talks/display-talks.component';
import {AverageRatingComponent} from '../average-rating/average-rating.component';
import {TalksService} from '../talks.service';
import {HttpClientModule} from '@angular/common/http';

describe('RatingFormComponent', () => {
  let component: RatingFormComponent;
  let fixture: ComponentFixture<RatingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule ],
      declarations: [ RatingFormComponent, DisplayTalksComponent, AverageRatingComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
