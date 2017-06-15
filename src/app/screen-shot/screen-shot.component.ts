import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'screen-shot',
  templateUrl: './screen-shot.component.html',
  styleUrls: ['./screen-shot.component.css']
})
export class ScreenShotComponent implements OnInit {

  screens: string[];
  
  constructor() { }

  ngOnInit() {
    this.screens = [
      "http://via.placeholder.com/130x90",
      "http://via.placeholder.com/130x90",
      "http://via.placeholder.com/130x90"
    ];
  }

}
