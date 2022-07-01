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


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HotelComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'hotels/:id', component: DetailComponent, canActivate: [DetailGuard] },
      { path: 'hotels', component: HotelComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
    HotelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

let rootTab = []
