import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upsell',
  templateUrl: './upsell.component.html',
  styleUrls: ['./upsell.component.scss']
})
export class UpsellComponent implements OnInit {

  image: string;
  caption: string;

  constructor() {
    //
  }

  ngOnInit(): void  {
    this.image = 'http://via.placeholder.com/800x300';
    this.caption = 'GAME EXCLUSIVE - View the Collector\'s Edition >>';
  }
}
