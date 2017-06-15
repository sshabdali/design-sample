import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trade-in',
  templateUrl: './trade-in.component.html',
  styleUrls: ['./trade-in.component.css']
})
export class TradeInComponent implements OnInit {

  image: string;
  caption: string;

  constructor() { 
  }

  ngOnInit() {
    this.image = "http://img.game.co.uk/merch2017/ecomm/espots/medium/PS4-169-M-ee.jpg";
    this.caption = "Earn Reward Point on all Trade Ins at Game";
  }

}
