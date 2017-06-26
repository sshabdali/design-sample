import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.scss']
})
export class LoyaltyComponent implements OnInit {

  loyaltyImage: string;
  loyaltyTitle: string;

  constructor() {
    //
  }

  ngOnInit(): void  {
    this.loyaltyImage = 'http://via.placeholder.com/620x200';
    this.loyaltyTitle = 'Earn 344 points or up to 10% back on everything when you join the ELITE. Read more!';
  }

}
