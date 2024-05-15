import { Component } from '@angular/core';
import { Order } from '../order.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-page-add-orders',
  templateUrl: './page-add-orders.component.html',
  styleUrl: './page-add-orders.component.scss'
})
export class PageAddOrdersComponent {

  newOrder: Order = {} as Order; 
  orderAdded: boolean = false; 

  constructor(private orderService : OrdersService){}

  onSubmit() {
    this.orderService.addOrder(this.newOrder)
      .subscribe({
        next: (addedOrder) => {
          // Handle successful Client addition (e.g., clear form, show success message)
          console.log('Order added:', addedOrder);
          this.newOrder = {} as Order; // Clear the form for new input
        },
        error: (error) => {
          // Handle error during product addition (e.g., show error message)
          console.error('Error adding product:', error);
        }
      });
  }


}
