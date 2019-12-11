import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageRatingComponent } from './average-rating.component';

describe('AverageRatingComponent', () => {
  let component: AverageRatingComponent;
  let fixture: ComponentFixture<AverageRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageRatingComponent ]
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
    })

    it('getAverageWithNumberHarder', () => {
        const testNumbers: number[] = [5,4,3,4,3,4,3,4]; // 3.75
        expect(component.getAverageWithNumber(testNumbers)).toBe(3.75);
    })

    it('getAverageWithNumberEmpty', () => {
        const testNumbers: number[] = [];
        expect(component.getAverageWithNumber(testNumbers)).toBe(3.75);
    })

    it('convertRatingsToNumsHapppy', () => {
        expect(component.convertRatingsToNums(['2', '5'])).toEqual([2, 5]);
    })

    it ('getAverage', () => {
        component.ratings = ['2','2','2'];
        expect(component.getAverage()).toBe();
    })

});
