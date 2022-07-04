import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './hotel/detail/detail.component';
import { HotelComponent } from './hotel/hotel/hotel.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
import { DetailGuard } from './hotel/hotel/detail.guard';
import { HotelModule } from './hotel/hotel.module';
import { AppMyRoutingModule } from './app-my-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HotelModule,
    AppMyRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

let rootTab = []
