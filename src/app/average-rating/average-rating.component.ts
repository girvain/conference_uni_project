import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.css']
})
export class AverageRatingComponent implements OnInit {
  @Input() ratings: any[];
  average: number;
  stars: string[] = [];

  constructor() {
  }

  ngOnInit() {
    if (this.ratings.length > 0) {
      console.log(this.getAverage());
      this.setStars(this.average);
      console.log(this.stars);
    }
  }

  getAverage(): number {
    let convertRatings;
    let total;
    let average;
    if (this.ratings.length > 0) {
      convertRatings = this.ratings.map(item => parseInt(item.rating, 10));
      total = convertRatings.reduce((acc, val) => acc + val);
      average = total / this.ratings.length;
      //this.average = average.toString(); // convert to string
      this.average = average;
      return 3;
    } else {
      return null;
    }
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
