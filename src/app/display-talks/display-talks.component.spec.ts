import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTalksComponent } from './display-talks.component';

describe('DisplayTalksComponent', () => {
  let component: DisplayTalksComponent;
  let fixture: ComponentFixture<DisplayTalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
