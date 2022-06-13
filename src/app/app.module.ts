import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { HotelComponent } from './hotel/hotel.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { StartRatingComponent } from './start-rating/start-rating.component'
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HotelComponent,
    StartRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
