import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrdersComponent } from './page-add-orders/page-add-orders.component';
import { PageEditOrdersComponent } from './page-edit-orders/page-edit-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TotalPipe } from '../shared/pipes/total.pipe';



@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrdersComponent,
    PageEditOrdersComponent,
    
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OrdersModule { }
