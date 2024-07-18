import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product-service';
import { lessThanFiveValidator, matchPassword, notIstanbul, parameterValid, validateAllFormFields } from 'src/app/validators/app';
import { CustomPipe } from '../../pipes/custom.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,AfterContentChecked {

  frmg : FormGroup;
  constructor( private customPipe : CustomPipe,private formBuilder:FormBuilder, private productService:ProductService){
    this.frmg = this.formBuilder.group({
      name : ["", [Validators.required]],
      surname: ["", [Validators.required, Validators.maxLength(5)]],
      yas : ["", [Validators.required, lessThanFiveValidator()]],
      password: [""],
      passwordConfirm : [""],
      inputone:[""],
      inputtwo:[""],
      adress : formBuilder.group({
        il:["",[Validators.required, notIstanbul() ]],
        ilce:[""]
      })
    }, {validators : [matchPassword(), parameterValid("inputone","inputtwo")]});



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
    console.log(productService.getProducts());

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
  if(this.frmg.valid){
  console.log("Model Driven Forms Submit Edildi.");
  // this.frmg.controls["name"].setValue("ali"); //controls yerine get("name") seklinde de kullanabiliriz.
  // this.frmg.controls["name"].setValue("ali",{onlySelf:true});
  console.log(data);
  console.log(data.name);
  console.log(data.surname);
  console.log(this.frmg.value);
  console.log(this.frmg.value.name);
  console.log(this.frmg.valid);
  console.log(this.frmg.touched);
  console.log(this.frmg.dirty);
  console.log(this.frmg.get("name").dirty);
  console.log(this.frmg.pristine);
  console.log(this.frmg.get("name").pristine);

  this.frmg.reset();

  console.log("Progromatik olarak state değiştirme fonksiyonları");
  this.frmg.markAsTouched();
  this.frmg.get("name").markAsTouched();
  this.frmg.get("name").markAsTouched({onlySelf:true});
  this.frmg.get("adress").markAsTouched();
  this.frmg.get("adress").markAllAsTouched();
  this.frmg.markAsUntouched();
  this.frmg.get("name").markAsUntouched();
  this.frmg.markAsDirty();
  this.frmg.get("name").markAsDirty();
  this.frmg.markAsPristine();
  this.frmg.get("name").markAsPristine();
  this.frmg.get("name").disable();
  this.frmg.get("name").enable();
  }
  else {
    validateAllFormFields(this.frmg);
  }
}



// validateAllFormFields(formGroup : FormGroup){
//   Object.keys(formGroup.controls).forEach(field =>{
//     const control = formGroup.get(field);
//     if(control instanceof FormGroup){
//       this.validateAllFormFields(control);
//     } else {
//       control.markAsTouched({onlySelf: true});
//     }
//   })
// }






  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked fonksiyonu çalıştı");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit fonksiyonu çalıştı");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck fonksiyonu çalıştı");
  }
  ngOnInit(): void {
    console.log("onInit fonksiyonu çalıştı");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("input degisken değişti");
  }

   @Input() titlea : string = '';
   @Input() communation : string ="";
   @Input() inpData : string = "asdaaa";
   metin : string = "merhabalar";
   metot(): void{
    console.log("hellooo");
    console.log(this.customPipe.transform("suayip",2,5))
   }

}
