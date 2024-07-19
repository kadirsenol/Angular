import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RandomNumberService } from 'src/app/services/randomNumberService';

@Component({
  selector: 'app-a',
  // templateUrl: './a.component.html',
  template: ` 
              
              <p> A Component Random Sayi =  {{sayi}} </p>
              <app-b></app-b><br>
              `,
  styleUrls: ['./a.component.scss']
})
export class AComponent {
  sayi: number;
  constructor(public randomNumber: RandomNumberService, private activatedRoute: ActivatedRoute) {
    this.sayi = randomNumber.random;
    this.activatedRoute.paramMap.subscribe(params => {
      console.log("id = ", params.get('id'));
    })
  }
}
