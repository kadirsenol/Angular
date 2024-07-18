import { Component } from '@angular/core';
import { RandomNumberService } from 'src/app/services/randomNumberService';

@Component({
  selector: 'app-a',
  // templateUrl: './a.component.html',
  template:` 
              
              <p> A Component Random Sayi =  {{sayi}} </p>
              <app-b></app-b><br>
              `,
  styleUrls: ['./a.component.scss']
})
export class AComponent {
    sayi:number;
    constructor(public randomNumber : RandomNumberService) {
      this.sayi = randomNumber.random        
    }
    
}
