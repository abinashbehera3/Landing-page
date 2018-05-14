import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(protected router:Router) { }
  
  public showBackdrop:boolean=false;
  public categoryexpand:boolean=false;

  ngOnInit() {
  }

  public homenavigate():void{
  		this.router.navigate(['/']);
  }
  onMouseLeave($event){
  		console.log($event);
  }  
}



