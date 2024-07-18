import { Component, Self } from '@angular/core';
import { RandomNumberService } from 'src/app/services/randomNumberService';

@Component({
  selector: 'app-c',
  // templateUrl: './c.component.html',
  template : ` 
            
            <p> C Component Random Sayi = {{sayi}} </p> `,
  styleUrls: ['./c.component.scss'],
  // providers:[RandomNumberService]
})
export class CComponent {
  sayi : number ;
    constructor(private randomNumber : RandomNumberService){
        this.sayi = randomNumber.random              
    }
}
