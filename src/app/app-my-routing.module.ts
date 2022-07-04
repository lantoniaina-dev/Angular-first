import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailComponent } from './hotel/detail/detail.component';
import { DetailGuard } from './hotel/hotel/detail.guard';
import { HotelComponent } from './hotel/hotel/hotel.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HotelComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'hotels/:id', component: DetailComponent, canActivate: [DetailGuard] },
      { path: 'hotels', component: HotelComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ]
})
export class AppMyRoutingModule { }
