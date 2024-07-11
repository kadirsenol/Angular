import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CustomPipe } from '../pipes/custom.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,AfterContentChecked {

  constructor(
   private customPipe : CustomPipe
  ){}
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
