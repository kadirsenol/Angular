import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ExampleDirective } from './drectives/example.directive';
import { StructuralDirective } from './drectives/structural.directive';
import { StructralIndexDirective } from './drectives/structral-index.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { ProductDetail, ProductService } from './services/product-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component'
import { RandomNumberService } from './services/randomNumberService';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserReadComponent } from './components/user-read/user-read.component';
import { UserService } from './services/user.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleDirective,
    StructuralDirective,
    StructralIndexDirective,
    CustomPipe,
    AComponent,
    BComponent,
    CComponent,
    UserCreateComponent,
    UserReadComponent,
    ErrorPageComponent,
    NavbarComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomPipe,ProductDetail, 
                {provide:ProductService, useFactory: (httpClienter : HttpClient) =>{
                    const response = httpClienter.get("https://services.odata.org/Northwind/Northwind.svc/").subscribe({next:data => console.log(data)})
                    return new ProductService({price:3});                                    
                },deps:[HttpClient]
                },
                RandomNumberService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
