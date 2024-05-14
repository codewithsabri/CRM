import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrdersComponent } from './page-add-orders/page-add-orders.component';
import { PageEditOrdersComponent } from './page-edit-orders/page-edit-orders.component';



@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrdersComponent,
    PageEditOrdersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
