import { Component, OnInit } from '@angular/core';
import { thumbNail } from "../view-models/thumbNail";
import { bundleVM } from "../view-models/bundleVM";

@Component({
  selector: 'bundle-items',
  templateUrl: './bundle-items.component.html',
  styleUrls: ['./bundle-items.component.css']
})
export class BundleItemsComponent implements OnInit {

  bundleViewModel: bundleVM;

  constructor() { }

  ngOnInit() {

    this.bundleViewModel = {
      bundle: {
        image: "http://img.game.co.uk/ml2/1/6/1/0/161024_gen_c.png",
        title: "Buy all three for just",
        platform: "PS4",
        price: 37.99
      },
      items: [
        { image: "https://img.game.co.uk/ml2/4/9/7/0/497011_ps4_d.png", title: "DOOM With UAC Pack", platform: "PS4" },
        { image: "https://img.game.co.uk/ml2/5/6/2/9/562924_ps4_d.png", title: "Crash Bandicoot N. Sane Trilogy", platform: "PS4" },
        { image: "http://img.game.co.uk/ml2/5/6/3/8/563832_xb1_b.png", title: "Forza Horizon 3", platform: "PS4" }
      ]
    }
  }
}
