import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.css']
})
export class AverageRatingComponent implements OnInit {
  @Input() ratings: any[];
  average: number = 0;
  stars: string[] = [];
  hasRating: boolean;

  constructor() {
  }

  ngOnInit() {
    this.setHasRating();
    this.getAverage();
    this.setStars(this.average);
  }

  setHasRating(): void {
    if (Array.isArray(this.ratings) && this.ratings.length > 0) {
      this.hasRating = true;
    } else {
      this.hasRating = false;
    }
  }

  getAverage(): void {
    if (Array.isArray(this.ratings) && this.ratings.length > 0) {
      let convertedRatings = this.convertRatingsToNums(this.ratings);
      this.average = this.getAverageWithNumber(convertedRatings);
    }
  }

  convertRatingsToNums(array: any[]): number[] {
    return array.map(item => parseInt(item.rating, 10));
  }

  getAverageWithNumber(nums: number[]): number {
    let total;
    let average;
    if (nums.length === 0) {
      return 0;
    } else {
      total = nums.reduce((acc, val) => acc + val);
      average = total / nums.length;
    }
    return average;
  }

  setStars(average: number): void {
    for (let i = 0; i < average; i++) {
      this.stars[i] = 'star';
    }
  }

  // setRating(id: string) {
  //     const stars = document.getElementById(id);
  //     stars.rating({initialRating: id,
  //     maxRating: 5
  //     });
  //   }

}
