import { Component, Self } from '@angular/core';
import { RandomNumberService } from 'src/app/services/randomNumberService';

@Component({
  selector: 'app-b',
  // templateUrl: './b.component.html',
  template:` 
              
              <p> B Component Random Sayi = {{ sayi }}
              <app-c></app-c> `,
  styleUrls: ['./b.component.scss'],
  providers:[RandomNumberService]
})
export class BComponent {
  sayi : number ;
  constructor(@Self() private randomNumber : RandomNumberService){
    this.sayi = randomNumber.random      
  }
}
