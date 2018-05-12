import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';


const ROUTES:Routes =[
]



@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
