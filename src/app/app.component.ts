import { style } from '@angular/animations';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <p>asdasdasdqqqqq<p>
  <div style="background-color: blue;"><app-home [titlea]="title" communation={{communationmessage}}>assad</app-home></div> 
  <input type="text" value={{title}}>
  <input type="text" [value]="title">
  <input type="text" [(ngModel)] = "title">
  <input type="text" [(ngModel)] = "title">
   <p *ngFor="let name of names; let index = index ; let ilk = first">repait deneme {{name}} {{index}} {{ilk}}</p>
   <p *ngIf="false"> ngIf deneme </p>
   <div *ngIf="false ; else referans"> current true </div>
   <ng-template #referans >current false</ng-template>
  
   <div ngSwitch="2"> 
      <div *ngSwitchCase="1" > sayi1 </div>
      <div *ngSwitchCase="2">sayi2</div>
      <div *ngSwitchDefault>Sayi Farkli</div>
   </div>
  
   <input type="text" ngClass={{c1}}>
   <div [ngStyle]="s1" [ngStyle]="" >ngstyle deneme</div>
    
   <div  appExample color={{renk}} > drective deneme </div>

   <div *appStructural="'1';let a = deger" >structtural drective{{a}} </div>
    <div *appStructralIndex="isimler; let names = isimler ; let i = index" >structural drective for index {{names}} {{i}}</div>
    <div >Custom Pipe Denemesi {{ pipe | custom : 2 : 5}}</div>
  
  `,
  // styleUrls: ['./app.component.scss']
  styles: ['.myclass{background-color:red;}', '.myclass2{background-color:blue}']

})
export class AppComponent {


  title : string = 'project1asd';
  names : string[] = ["ali","mehmet","sezer"] ;
  sayi : number = 1 ;
  c1 : string = "myclass";
  s1 : any = {'background-color':'blue'} 
  renk : string ="blue";
  isimler : string[] = ["ahmet","mehmet","sezer"]
  pipe : string = "suayip";
  communationmessage : string = "child e iletilen mesaj"; // Parent to Child Communication
  inpDataChange : string = "qweassssd"
}
  