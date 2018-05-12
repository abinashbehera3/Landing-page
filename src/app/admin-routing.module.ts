import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


const adminRoutes:Routes=[
{ path:'',component:LandingPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(adminRoutes)],
  exports:[RouterModule],
})

export class AdminRoutingModule { }
