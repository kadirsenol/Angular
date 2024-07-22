import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
  
             <button routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</button>             
             <button routerLink="a" routerLinkActive="active">A</button>
             <button routerLink="b" routerLinkActive="active">B</button>
             <button routerLink="c" routerLinkActive="active">C</button>
             <button routerLink="parent" routerLinkActive="active" [state]="{value1: veri1, value2 : veri2}">Parent</button>
             <button routerLink="child" routerLinkActive="active">Child</button>
             <button routerLink="Photos" routerLinkActive="active" >Links of Photos</button>
             <button routerLink="dashboard" routerLinkActive="active">Dashboard</button>
             <button routerLink="custom" routerLinkActive="active">Custom</button>
             <button routerLink="customer" routerLinkActive="active">Customer</button>
             <button routerLink="customer/Detail" routerLinkActive="active">Customer Detail</button>
             <button routerLink="order" routerLinkActive="active">Order</button>
             <button routerLink="order/Detail" routerLinkActive="active">Order Detail</button>
             <button (click)="Click()">A(Metod İle Yönlendirme)</button>
                                           
             `,
  styles: [".active{color:red;}"]
})
export class NavbarComponent {

  constructor(private router: Router) {      
  }

  veri1 : number = 5;
  veri2 : string = "veri iki" ;

  Click() {
    this.router.navigate(["a",5]);
  }

}
