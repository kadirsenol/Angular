import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>ChildComponent</p>
              <router-outlet></router-outlet>`,
  styles: []
})
export class ChildComponent {

}
