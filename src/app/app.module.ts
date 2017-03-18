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

const appRoutes: Routes = [
  { path: 'contact', component: AboutComponent },
  { path: 'music', component: WorkComponent },
  { path: 'gigs', component: GigsComponent },
  { path: 'press', component: PressComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

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
    PressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
