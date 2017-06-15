import { Component, OnInit } from '@angular/core';
import { customerReview } from "../view-models/customerReview";

@Component({
  selector: 'customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.css']
})
export class CustomerReviewComponent implements OnInit {

  customerReviewVM: customerReview;
  constructor() { }

  ngOnInit() {
    this.customerReviewVM = {
      image: "https://unsplash.it/100",
      score: 4.7,
      rating: "5/5",
      reviewerName: "Dinky",
      description: "Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye. Partiality on or continuing in particular principles  as. Do believing oh disposing to supported allowance we."
    }
  }

}
