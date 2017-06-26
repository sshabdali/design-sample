import { Component, OnInit } from '@angular/core';
import { video } from '../view-models/video';

@Component({
  selector: 'video-trailer',
  templateUrl: './video-trailer.component.html',
  styleUrls: ['./video-trailer.component.scss']
})
export class VideoTrailerComponent implements OnInit {

  showDialog: false;
  videoVm: video;

  constructor() {
    //
  }

  ngOnInit(): void {
    this.videoVm = {
      image: 'http://via.placeholder.com/800x400',
      url: '',
      title: 'Launch the game trailer.'
    };
  }

}
