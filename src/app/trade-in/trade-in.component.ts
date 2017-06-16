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
    this.image = 'http://via.placeholder.com/600x400';
    this.caption = "Earn Reward Point on all Trade Ins at Game";
  }

}
