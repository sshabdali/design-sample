import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'screen-shot',
  templateUrl: './screen-shot.component.html',
  styleUrls: ['./screen-shot.component.css']
})
export class ScreenShotComponent implements OnInit {

  screens: Array<string> = [];

  constructor() {
    //
  }

  ngOnInit(): void {
    this.screens = [
      'http://via.placeholder.com/210x135',
      'http://via.placeholder.com/210x135',
      'http://via.placeholder.com/210x135'
    ];
  }

}
