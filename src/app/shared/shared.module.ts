import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StartRatingComponent } from '../hotel/start-rating/start-rating.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    StartRatingComponent
  ],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  exports: [
    CommonModule,
    FormsModule,
    StartRatingComponent,
    AppRoutingModule,

  ],
})
export class SharedModule { }
