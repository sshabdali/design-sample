import {
  AfterContentInit, Component, ContentChildren, QueryList
} from '@angular/core';
import {GameFooterTabComponent} from '../gd-footer-tab/gd-footer-tab.component';

@Component({
  selector: 'gd-footer-panel',
  templateUrl: './gd-footer-panel.component.html',
  styleUrls: ['./gd-footer-panel.component.css']
})
export class GameFooterPanelComponent implements AfterContentInit {

  @ContentChildren(GameFooterTabComponent)
  tabs: QueryList<GameFooterTabComponent>;

  ngAfterContentInit(): void {
    if (this.tabs.length === 0) {
      console.error('you need at least 1 tab in the footer');
    }
  }

  selectTab(tab: GameFooterTabComponent): void {
    tab.selected = !tab.selected;
    this.tabs.forEach(t => {
      if (t !== tab)
        t.selected = false;
    });
  }

  get getWidth(): string {
    return `${100 / (this.tabs.length + 1)}%`;
  }
}
