import {Component, HostBinding, HostListener, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'gd-footer-tab',
  templateUrl: './gd-footer-tab.component.html',
  styleUrls: ['./gd-footer-tab.component.css']
})
export class GameFooterTabComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    icon: string;

    @Input()
    selected: boolean;

    @Input()
    content: TemplateRef<any>;

    hovering: boolean;

    constructor() {
        this.hovering = false;
    }

  ngOnInit(): void {
    //
  }
}
