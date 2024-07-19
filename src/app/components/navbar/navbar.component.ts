import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
  
             <button routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</button>             
             <button routerLink="a" routerLinkActive="active">A</button>
             <button routerLink="b" routerLinkActive="active">B</button>
             <button routerLink="c" routerLinkActive="active">C</button>
             <button routerLink="parent" routerLinkActive="parent">Parent</button>
             <button routerLink="child" routerLinkActive="child">Child</button>

             <button (click)="Click()">A(Metod İle Yönlendirme)</button>
                                           
             `,
  styles: [".active{color:red;}"]
})
export class NavbarComponent {

  constructor(private router: Router) {      
  }



  Click() {
    this.router.navigate(["a",5]);
  }

}
