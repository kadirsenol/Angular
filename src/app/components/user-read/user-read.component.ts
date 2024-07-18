import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-read',
  // templateUrl: './user-read.component.html',
  template:` 
            <ul>
              <li *ngFor="let name of userService.users " > {{name}} </li>
            </ul>
   `,
  styleUrls: ['./user-read.component.scss']
})
export class UserReadComponent {      
      constructor(public userService : UserService) {        
      }      
}
