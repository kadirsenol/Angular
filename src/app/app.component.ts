import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <p>asdasdasdqqqqq<p>
  <div style="background-color: blue;"><app-home [titlea]="title"/></div> 
  <input type="text" value={{title}}>
  <input type="text" [value]="title">
  <input type="text" [(ngModel)] = "title">
  <input type="text" [(ngModel)] = "title">
   
  
  
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string = 'project1asd';
}
  