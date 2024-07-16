import { style } from '@angular/animations';
import { Component, Input, OnChanges, SimpleChanges,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


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


    <form #frm = "ngForm" (ngSubmit)="submit(frm.value)">
    <input type="text" name="name" placeholder="name" ngModel> <br>
    <input type="text" name="surname" placeholder="surname" ngModel> <br>
    <div ngModelGroup="adress">
      <input type="text" name="il" placeholder="il" ngModel> <br>
      <input type="text" name="ilçe" placeholder="ilçe" ngModel>
    </div>
    <button>submit</button>
    </form>
  

  <form [formGroup]="frmg" (ngSubmit)="submitModelDrevinForm(frmg.value)">
    <input type="text" placeholder="Name" formControlName="name"> <br>
    <input type="text" placeholder="Surname" formControlName="surname"> <br>
    <div formGrou pName="adress">
      <input type="text" placeholder="İl" formControlName="il"><br>
      <input type="text" placeholder="İlçe" formArrayName="ilce"><br>
    </div>
    <button>send</button>
  </form>
  `,
  // styleUrls: ['./app.component.scss']
  styles: ['.myclass{background-color:red;}', '.myclass2{background-color:blue}']

})
export class AppComponent {

  frmg : FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.frmg = formBuilder.group({
      name : ["", Validators.required],
      surname: ["", [Validators.required, Validators.maxLength(5)]],
      adress : formBuilder.group({
        il:[""],
        ilce:[""]
      })
    })    

    this.frmg.valueChanges.subscribe({
      next:data=>{
        console.log(data);
      }      
    })
     this.frmg.controls["name"].valueChanges.subscribe({ //controls yerine get("name") de kullanılabilir.
      next:data=>{
        console.log(data);        
      }
    })
    this.frmg.statusChanges.subscribe({
      next:data => {
        console.log(data);        
      }
    })
    this.frmg.get("name").statusChanges.subscribe({
      next:data=>{
        console.log(data);        
      }
    })
  }

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


  @ViewChild("frm", {static:true}) frm:NgForm;
  // @ViewChild("frmg", {static:true}) frmg:FormGroup; 

  submit(data) {
    console.log("ilk deger atama");    
    this.frm.setValue({
      name: "ali",
      surname : "yılmaz",
      adress:{
        il:"ankara",
        ilçe:"yenimahalle"
      }
    })

    console.log("belirli alanlarda ilk deger atama.");
    
    this.frm.control.patchValue({
      name:"ahmet"
    })

    console.log(data);
    console.log(data.name);
    console.log(data.adress.il);
    console.log(this.frm.value);
    console.log(this.frm.value.name);
    console.log(this.frm.value.adress.il); 
    
    console.log(this.frm.valid);
    console.log(this.frm.touched);
    console.log(this.frm.submitted);

    console.log("form değerini resetlemek");    
    this.frm.reset();
    this.frm.resetForm();
    
    console.log("form bilgileri");    
    console.log(this.frm);
    console.log(this.frm.form);
    console.log(this.frm.controls);    
}

submitModelDrevinForm(data){
  console.log("Model Driven Forms Submit Edildi.");  
  this.frmg.controls["name"].setValue("ali"); //controls yerine get("name") seklinde de kullanabiliriz.
  this.frmg.controls["name"].setValue("ali",{onlySelf:true});
  console.log(data); 
  console.log(data.name);
  console.log(data.surname);
  console.log(this.frmg.value);  
  console.log(this.frmg.value.name);
  console.log(this.frmg.valid);
  console.log(this.frmg.touched);
  this.frmg.reset();  

}

}