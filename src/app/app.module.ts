import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExampleDirective } from './drectives/example.directive';
import { StructuralDirective } from './drectives/structural.directive';
import { StructralIndexDirective } from './drectives/structral-index.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleDirective,
    StructuralDirective,
    StructralIndexDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
