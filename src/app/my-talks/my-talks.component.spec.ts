import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTalksComponent } from './my-talks.component';

describe('MyTalksComponent', () => {
  let component: MyTalksComponent;
  let fixture: ComponentFixture<MyTalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
