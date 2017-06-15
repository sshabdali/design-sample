import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'packshot',
  templateUrl: './packshot.component.html',
  styleUrls: ['./packshot.component.css']
})
export class PackshotComponent implements OnInit {

  title: string;
  imageUrl: string;
  
  constructor() { }

  ngOnInit() {
    this.title = "Overwatch - Origins Edition";
    this.imageUrl = "https://unsplash.it/600" //"http://via.placeholder.com/600x280"; 
  }

}
