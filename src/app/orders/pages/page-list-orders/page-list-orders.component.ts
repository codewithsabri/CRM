import { Component } from '@angular/core';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss',
})
export class PageListOrdersComponent {

  public order : any;
  constructor(private ordersService: OrdersService) {
    console.log(this.ordersService.sumUp(1, 2));
    
  }

  ngOnInit() {
    this.ordersService.getData().subscribe((data) => {
      // Ensure data is always an array for consistent handling
      this.order = Array.isArray(data) ? data : [data];
  
      console.log("Data type:", typeof this.order); // Log the type for clarity
  
      // Loop through order and log each element
      this.order.forEach((element:any) => console.log(element));
    });
  }
  //AJOUTER un serveur avec jsonserver
  //recupere api/adress
  //appel http get
}
