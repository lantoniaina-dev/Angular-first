import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './hotel/detail/detail.component';
import { DetailGuard } from './hotel/hotel/detail.guard';
import { HotelComponent } from './hotel/hotel/hotel.component';

const routes: Routes = [
  // { path: 'home', component: HotelComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'hotels/:id', component: DetailComponent, canActivate: [DetailGuard] },
  // { path: 'hotels', component: HotelComponent },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
