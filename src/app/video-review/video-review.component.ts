import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-review',
  templateUrl: './video-review.component.html',
  styleUrls: ['./video-review.component.scss']
})
export class VideoReviewComponent implements OnInit {

  videoReviews: Array<string> = [];

  constructor() {
    //
  }

  ngOnInit(): void  {
    this.videoReviews = [
      'http://via.placeholder.com/210x135',
      'http://via.placeholder.com/210x135',
      'http://via.placeholder.com/210x135'
    ];
  }

}
