import { Component, Input, OnInit } from '@angular/core';

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
        //console.log(this.ratings);
    }

    setHasRating(): void {
        if (Array.isArray(this.ratings) && this.ratings.length > 0) {
            this.hasRating = true;
        }else {
            this.hasRating = false;
        }
    }

    getAverage(): void {
        if (Array.isArray(this.ratings) && this.ratings.length > 0) {
            let convertedRatings = this.convertRatingsToNums(this.ratings);
            this.average = this.getAverageWithNumber(convertedRatings);
        }

        // let convertRatings;
        // let total;
        // let average;
        // if (this.ratings.length > 0) {
        //     convertRatings = this.ratings.map(item => parseInt(item.rating, 10));
        //     total = convertRatings.reduce((acc, val) => acc + val);
        //     average = total / this.ratings.length;
        //     //this.average = average.toString(); // convert to string
        //     //this.average = average;
        // } else
        //     this.average = 0;
    }

    convertRatingsToNums(array: any[]): number[] {
         return array.map(item => parseInt(item.rating, 10));

    }

    getAverageWithNumber(nums: number[]): number {
        let total;
        let average;
        total = nums.reduce((acc, val) => acc + val);
        average = total / nums.length;
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
