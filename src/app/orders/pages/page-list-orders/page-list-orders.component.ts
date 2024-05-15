import { Component } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Order } from '../../order.model';
import { Router } from '@angular/router'; //

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss',
})
export class PageListOrdersComponent {
  orders: Order[] = [];
  availableStates: string[] = ['Cancelled', 'Option', 'Confirmed'];
  selectedClientId: string = ''; 
  constructor(private ordersService: OrdersService, private router: Router) {

  }

  ngOnInit() {
    this.ordersService.getOrder().subscribe((data) => {
      // Ensure data is always an array for consistent handling
      this.orders = Array.isArray(data) ? data : [data];

      // console.log('Data type:', typeof this.orders); // Log the type for clarity

      // Loop through order and log each element
      // this.orders.forEach((element: any) => console.log(element));
    });
  }

  editOrder(id: string) {
    this.selectedClientId = id;
    this.handleClick(this.selectedClientId);
    // Optionally pre-populate the form with client data
  }

  addOrder() {
    this.router.navigate(['/orders/add']);
  }


  deleteClient(id: string) {
    console.log(id);
    this.ordersService.deleteOrder(id).subscribe({
      next: (deletedOrder) => {
        console.log('Client updated:', deletedOrder);
        this.orders = this.orders.filter(order => order.id !== id);
        // Set flag for success (optional)
      },
      error: (error) => {
        console.error('Error updating client:', error);
        // Handle errors appropriately (e.g., display error message)
      },
    });
  }

  handleClick(id: string) {
  
    // Optional: Perform actions before redirecting (e.g., confirmation)
    this.router.navigate(['/orders/edit', id]);
  }

  //AJOUTER un serveur avec jsonserver
  //recupere api/adress
  //appel http get
}
