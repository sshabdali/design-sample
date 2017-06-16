import { Component, OnInit } from '@angular/core';
import { video } from "../view-models/video";

@Component({
  selector: 'video-trailer',
  templateUrl: './video-trailer.component.html',
  styleUrls: ['./video-trailer.component.css']
})
export class VideoTrailerComponent implements OnInit {

  videoVm: video;

  constructor() { }

  ngOnInit() {
    this.videoVm = {
      image: "http://via.placeholder.com/600x350",
      url: "",
      title: "Launch the game trailer."
    }
  }

}
