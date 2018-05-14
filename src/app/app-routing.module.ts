import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


const ROUTES:Routes =[
{ path:'',component:LandingPageComponent},
]



@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
