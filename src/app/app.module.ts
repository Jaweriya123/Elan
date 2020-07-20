import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
 import { BannerSliderComponent } from './banner-slider/banner-slider.component';
// import { HomeContentComponent } from './home-content/home-content.component';
 import { MobileHomeComponent } from './mobile-home/mobile-home.component';
import { SidemenuComponent } from './header/sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
// import { ProductPageComponent } from './product-page/product-page.component';
// import { ColectionUnstichedComponent } from './colection-unstiched/colection-unstiched.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
     BannerSliderComponent,
    // HomeContentComponent,
     MobileHomeComponent,
    SidemenuComponent,
    FooterComponent,
    // ProductPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
