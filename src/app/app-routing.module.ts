import { BookingComponent } from './booking/booking.component';
import { ListingComponent } from './listing/listing.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ListingComponent},
  { path: 'listing', component: ListingComponent},
  { path: 'booking', component: BookingComponent },
    {path: 'booking/:name', component: BookingComponent },
 {path: '**', redirectTo: 'listing '}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
