import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upsell',
  templateUrl: './upsell.component.html',
  styleUrls: ['./upsell.component.css']
})
export class UpsellComponent implements OnInit {

  image: string;
  caption: string;

  constructor() { 
  }

  ngOnInit() {
    this.image = 'http://via.placeholder.com/600x400';
    this.caption = "GAME EXCLUSIVE - View the Collector's Edition >>";
  }
}
