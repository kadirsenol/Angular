import { style } from '@angular/animations';
import { Component, Input, OnChanges, SimpleChanges,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators,FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ProductService } from './services/product-service';
import { UserService } from './services/user.service';
import { lessThanFiveValidator, matchPassword, notIstanbul, parameterValid, validateAllFormFields } from './validators/app';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>  
  `,
  // styleUrls: ['./app.component.scss']
  styles: ['.myclass{background-color:red;}', '.myclass2{background-color:blue}'],
  // providers:[ProductService]


})
export class AppComponent {
  
  
  communationmessage : string = "child e iletilen mesaj"; // Parent to Child Communication
  title : string = 'project1asd';
  


}