import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'hotels/:id/edit', component: HotelEditComponent }
    ]),
  ]
})
export class HotelRoutingModule { }
