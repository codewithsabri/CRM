import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../order.model';

@Component({
  selector: 'app-page-edit-orders',
  templateUrl: './page-edit-orders.component.html',
  styleUrl: './page-edit-orders.component.scss',
})
export class PageEditOrdersComponent {
  orderId: string = '';
  order: Order = {
    id: '',
    tjmHt: 0,
    nbJours: 0,
    tva: 0,
    state: '',
    typePresta: '',
    client: '',
    comment: '',
  };

  editSuccess = false;

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.orderId = params['id']; // Access the 'id' parameter
      console.log('Client ID:', this.orderId);
    });
  }

  onDeleteClick() {
    // Implement logic to confirm deletion (optional):
    if (
      confirm(
        'Êtes-vous sûr de vouloir effacer ? (Are you sure you want to erase?)'
      )
    ) {
      // Perform deletion logic here
      console.log('Object deleted (placeholder for actual deletion)'); // Replace with deletion functionality
    }
  }

  onSubmit() {
    if (!this.orderId) {
      // Update the client object with the user's changes
      console.log("pas d'id");
    } else {
      console.log('id : ' + this.orderId);
      this.ordersService.updateOrder(this.orderId, this.order).subscribe({
        next: (updatedOrder) => {
          console.log('Order updated:', updatedOrder);
          this.editSuccess = true; // Set flag for success (optional)
        },
        error: (error) => {
          console.error('Error updating order:', error);
          // Handle errors appropriately (e.g., display error message)
        },
      });
    }
    // Call the updateClient method with the updated client object
  }
}
