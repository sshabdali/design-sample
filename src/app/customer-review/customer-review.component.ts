import { Component, OnInit } from '@angular/core';
import { customerReview } from '../view-models/customerReview';

@Component({
  selector: 'customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.scss']
})
export class CustomerReviewComponent implements OnInit {

  showDialog = false;
  customerReviewVM: customerReview;
  constructor() {
    //
  }

  ngOnInit(): void  {
    this.customerReviewVM = {
      image: 'https://unsplash.it/90',
      score: 4.7,
      rating: '5/5',
      reviewerName: 'Dinky',
      description: 'Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye. Partiality on or continuing in particular principles  as. Do believing oh disposing to supported allowance we.'
    };
  }

}
