import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {

  title: string;
  imageUrl: string;

  constructor() { }

  ngOnInit() {
  }
}
