import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkSearchComponent } from './talk-search.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('TalkSearchComponent', () => {
  let component: TalkSearchComponent;
  let fixture: ComponentFixture<TalkSearchComponent>;
  let selectOptions: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ TalkSearchComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkSearchComponent);
    component = fixture.componentInstance;
    selectOptions = {speakers: ['davi p'], sessions: ['a'], tags: 'javasctip' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
