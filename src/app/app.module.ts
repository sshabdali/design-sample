import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PackshotComponent } from "app/packshot/packshot.component";
import { ImportantInfoComponent } from "app/important-info/important-info.component";
import { VideoTrailerComponent } from "app/video-trailer/video-trailer.component";
import { ScreenShotComponent } from "app/screen-shot/screen-shot.component";
import { VideoReviewComponent } from "app/video-review/video-review.component";
import { LoyaltyComponent } from "app/loyalty/loyalty.component";
import { CustomerReviewComponent } from "app/customer-review/customer-review.component";
import { BundleItemsComponent } from "app/bundle-items/bundle-items.component";
import { ShoppersViewedComponent } from "app/shoppers-viewed/shoppers-viewed.component";
import { TradeInComponent } from "app/trade-in/trade-in.component";
import { UpsellComponent } from "app/upsell/upsell.component";
import { GameFooterPanelComponent } from "app/Ui/gd-footer-panel/gd-footer-panel.component";
import { GameFooterTabComponent } from "app/Ui/gd-footer-tab/gd-footer-tab.component";
import { HeaderComponent } from "app/Ui/header/header.component";
import { SearchbarComponent } from "app/Ui/searchbar/searchbar.component";
import { StoreFinderComponent } from "app/Ui/store-finder/store-finder.component";
import { MiniBasketComponent } from "app/Ui/mini-basket/mini-basket.component";
import { MyAccountInfoComponent } from "app/Ui/my-account-info/my-account-info.component";

@NgModule({
  declarations: [
    AppComponent,
    GameFooterPanelComponent,
    GameFooterTabComponent,
    HeaderComponent,
    SearchbarComponent,
    StoreFinderComponent,
    MiniBasketComponent,
    MyAccountInfoComponent,
    PackshotComponent,
    ImportantInfoComponent,
    VideoTrailerComponent,
    ScreenShotComponent,
    VideoReviewComponent,
    LoyaltyComponent,
    CustomerReviewComponent,
    BundleItemsComponent,
    ShoppersViewedComponent,
    TradeInComponent,
    UpsellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
