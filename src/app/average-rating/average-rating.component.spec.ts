import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AverageRatingComponent} from './average-rating.component';

describe('AverageRatingComponent', () => {
  let component: AverageRatingComponent;
  let fixture: ComponentFixture<AverageRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AverageRatingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAverageWithNumberSimple', () => {
    const testNumbers: number[] = [2, 2, 2];
    expect(component.getAverageWithNumber(testNumbers)).toBe(2);
  });

  it('getAverageWithNumberHarder', () => {
    const testNumbers: number[] = [5, 4, 3, 4, 3, 4, 3, 4]; // 3.75
    expect(component.getAverageWithNumber(testNumbers)).toBe(3.75);
  });

  it('getAverageWithNumberEmpty', () => {
    const testNumbers: number[] = [];
    expect(component.getAverageWithNumber(testNumbers)).toBe(0);
  });

  it('convertRatingsToNumsHapppy', () => {
    const result = component.convertRatingsToNums([{id: 'someNumber', rating: '2'}, {id: '12343', rating: '5'}]);
    expect(result).toEqual([2, 5]);
  });

  it('getAverage', () => {
    component.ratings = ([{id: 'someNumber', rating: '2'}, {id: '12343', rating: '2'}]);
    component.getAverage();
    expect(component.average).toBe(2);
  });

});
