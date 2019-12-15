import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {NavComponent} from '../nav/nav.component';
import {NgModule} from '@angular/core';
import {HeadingContentComponent} from '../heading-content/heading-content.component';
import {TalkSearchComponent} from '../talk-search/talk-search.component';
import {DisplayTalksComponent} from '../display-talks/display-talks.component';
import {DisplaySessionsComponent} from '../display-sessions/display-sessions.component';
import {FooterComponent} from '../footer/footer.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent,
        NavComponent,
        HeadingContentComponent,
        TalkSearchComponent,
        DisplayTalksComponent,
        DisplaySessionsComponent,
        FooterComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
