import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'important-info',
  templateUrl: './important-info.component.html',
  styleUrls: ['./important-info.component.css']
})
export class ImportantInfoComponent implements OnInit {

  message: string;
  constructor() { }

  ngOnInit() {
    this.message = 'A bias studies. The unseen rolls with a supplier. Beneath a bomb alternative peers the upright developer.'
  }

}
