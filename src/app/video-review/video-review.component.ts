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
      'http://via.placeholder.com/210x135',
      'http://via.placeholder.com/210x135',
      'http://via.placeholder.com/210x135'
    ];
  }

}
