import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
              <p>PARENT</p>
              <a routerLink="child">Child</a>
              <router-outlet></router-outlet>
          `,
  styles: []
})
export class ParentComponent {

}
