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
import { PhotosWithResolveGuardComponent } from './components/photos-with-resolve-guard/photos-with-resolve-guard.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { CustomComponent } from './components/custom/custom.component';
import { CustomModule } from './modules/custom/custom.module';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomerDetailComponent } from './components/customers/customer-detail/customer-detail.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { CustomerModule } from './modules/customer/customer.module';
import { OrderModule } from './modules/order/order.module';


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
    ChildComponent,
    PhotosWithResolveGuardComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomModule,
    CustomerModule,
    OrderModule
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
