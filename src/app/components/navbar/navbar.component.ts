import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
             <button routerLink="a" routerLinkActive="active">A</button>
             <button routerLink="b" routerLinkActive="active">B</button>
             <button routerLink="c" routerLinkActive="active">C</button>
             <button routerLink="" routerLinkActive="active">Home</button>
             
             `,
  styles: [".active{color:red;}"]
})
export class NavbarComponent {

}
