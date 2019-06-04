import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdService } from './ad.service';
import { HeroProfileComponent } from './hero-profile.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroProfileComponent,
    AdBannerComponent,
    AdDirective,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AdService
  ],
  entryComponents : [
    HeroProfileComponent,
    HeroComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
