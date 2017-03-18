import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeightcalcDirective } from './heightcalc.directive';
import { WorkComponent } from './work/work.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GigsComponent } from './gigs/gigs.component';
import { PressComponent } from './press/press.component';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    AboutComponent,
    NavigationComponent,
    HeightcalcDirective,
    WorkComponent,
    WelcomeComponent,
    GigsComponent,
    PressComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
