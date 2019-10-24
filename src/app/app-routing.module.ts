import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BookingComponent} from "./booking/booking.component";
import {ConfirmationComponent} from "./confirmation/confirmation.component";
import {AvailabilityComponent} from "./availability/availability.component";



const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    redirectTo:'/'
  },
  {
    path:'booking',
    component: BookingComponent
  },
  {
    path:'confirmation',
    component:ConfirmationComponent
  },
  {
    path:'availability',
    component:AvailabilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
