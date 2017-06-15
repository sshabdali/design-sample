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
    this.image = "http://img.game.co.uk/merch2017/ecomm/espots/medium/XBOX-149-M-ee.jpg";
    this.caption = "GAME EXCLUSIVE - View the Collector's Edition >>";
  }
}
