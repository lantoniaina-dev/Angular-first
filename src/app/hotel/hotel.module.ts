import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { HotelComponent } from './hotel/hotel.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { HotelRoutingModule } from './hotel-routing.module';


@NgModule({
  declarations: [
    DetailComponent,
    HotelComponent,
    HotelEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HotelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HotelModule { }
