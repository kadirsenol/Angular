import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExampleDirective } from './drectives/example.directive';
import { StructuralDirective } from './drectives/structural.directive';
import { StructralIndexDirective } from './drectives/structral-index.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { ProductDetail, ProductService } from './services/product-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleDirective,
    StructuralDirective,
    StructralIndexDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomPipe,ProductDetail],
  bootstrap: [AppComponent]
})
export class AppModule { }
