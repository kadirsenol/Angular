import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from 'src/app/components/orders/order/order.component';
import { OrderDetailComponent } from 'src/app/components/orders/order-detail/order-detail.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [OrderComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component:OrderComponent},
      {path: "Detail", component:OrderDetailComponent}
    ])
  ],
  exports:[OrderComponent, OrderDetailComponent]
  
})
export class OrderModule { }
