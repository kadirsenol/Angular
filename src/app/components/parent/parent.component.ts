import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  template: `
              <p>PARENT</p>
              <a routerLink="child">Child</a>
              <p>Router ile gelen dinamik gizli veri : {{data.value1}} {{data.value2}} </p>
              <router-outlet></router-outlet>
          `,
  styles: []
})
export class ParentComponent {
  data : any ;
  constructor(private router : Router){
       this.data =  this.router.getCurrentNavigation().extras.state; 
       console.log(this.data);       
  }

}
