import { Component, OnInit } from '@angular/core';
import { thumbNail } from '../view-models/thumbNail';

@Component({
  selector: 'shoppers-viewed',
  templateUrl: './shoppers-viewed.component.html',
  styleUrls: ['./shoppers-viewed.component.scss']
})
export class ShoppersViewedComponent implements OnInit {

  thumbNailVM: Array<thumbNail> = [];

  constructor() {
    //
  }

  ngOnInit(): void  {

    this.thumbNailVM = [
      { image: 'https://img.game.co.uk/ml2/4/9/7/0/497011_ps4_d.png', title: 'DOOM With UAC Pack', platform: 'PS4' },
      { image: 'https://img.game.co.uk/ml2/5/6/2/9/562924_ps4_d.png', title: 'Crash Bandicoot N. Sane Trilogy', platform: 'PS4' },
      { image: 'http://img.game.co.uk/ml2/6/9/2/2/692214_ps4_c.png', title: 'Call Of Duty: WWII Pro Edition', platform: 'PS4' },
      { image: 'http://img.game.co.uk/ml2/4/6/0/3/460354_ps4_c.png', title: 'Overwatch: Origins Edition', platform: 'PS4' }
    ];
  }

}
