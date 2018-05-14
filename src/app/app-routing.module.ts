import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClientComponent } from './client/client.component';
import { CareerComponent } from './career/career.component';
import { ProductComponent } from './product/product.component';


const ROUTES:Routes =[
{ path:'',component:LandingPageComponent},
{ path:'aboutus',component:AboutusComponent},
{ path:'contactus',component:ContactusComponent},
{ path:'client',component:ClientComponent},
{ path:'career',component:CareerComponent},
{ path:'product',component:ProductComponent},
]



@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
