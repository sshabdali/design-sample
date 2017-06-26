import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trade-in',
  templateUrl: './trade-in.component.html',
  styleUrls: ['./trade-in.component.scss']
})
export class TradeInComponent implements OnInit {

  image: string;
  caption: string;

  constructor() {
    //
  }

  ngOnInit(): void  {
    this.image = 'http://via.placeholder.com/800x300';
    this.caption = 'Earn Reward Point on all Trade Ins at Game';
  }

}
