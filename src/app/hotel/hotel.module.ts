import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { HotelComponent } from './hotel/hotel.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DetailComponent,
    HotelComponent,
    // StartRatingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // StartRatingComponent,
    AppRoutingModule,
    RouterModule.forChild([

    ]),
    SharedModule
  ]
})
export class HotelModule { }
