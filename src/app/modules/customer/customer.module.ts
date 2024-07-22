import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from 'src/app/components/customers/customer/customer.component';
import { CustomerDetailComponent } from 'src/app/components/customers/customer-detail/customer-detail.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component:CustomerComponent},
      {path: "Detail", component:CustomerDetailComponent}
    ])
  ],
  exports:[CustomerComponent, CustomerDetailComponent]
})
export class CustomerModule { }
