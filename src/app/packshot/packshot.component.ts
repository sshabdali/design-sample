import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'packshot',
  templateUrl: './packshot.component.html',
  styleUrls: ['./packshot.component.scss']
})
export class PackshotComponent implements OnInit {

  title: string;
  imageUrl: string;

  constructor() {
    //
  }

  ngOnInit(): void  {
    this.title = 'Overwatch - Origins Edition';
    this.imageUrl = 'http://via.placeholder.com/395x440';
  }

}
