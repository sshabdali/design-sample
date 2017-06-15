import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-review',
  templateUrl: './video-review.component.html',
  styleUrls: ['./video-review.component.css']
})
export class VideoReviewComponent implements OnInit {

  videoReviews: string[];
  
  constructor() { }

  ngOnInit() {
    this.videoReviews = [
      "http://via.placeholder.com/130x90",
      "http://via.placeholder.com/130x90",
      "http://via.placeholder.com/130x90"
    ];
  }

}
