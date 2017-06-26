import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showSearchBar = false;
  showNavigationMenu = false;

  constructor(private screenService: ScreenService) {
    screenService.resize$.subscribe(() => this.onResize());
  }

  ngOnInit(): void {
    this.onResize();
  }

  toggleSearchBar(): void {
    this.showSearchBar = !this.showSearchBar;
  }

  toggleNavigationMenu(): void {
    this.showNavigationMenu = !this.showNavigationMenu;
  }

  onResize(): void {
    this.showNavigationMenu = this.screenService.isSmallAndAbove();
  }
}
