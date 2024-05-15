import { Component } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss'
})
export class PageListClientsComponent {


  public client : any;
  constructor(private clientsService:ClientsService) {
    
  }


  ngOnInit() {
    this.clientsService.getData().subscribe((data) => {
      // Ensure data is always an array for consistent handling
      this.client = Array.isArray(data) ? data : [data];
  
      console.log("Data type:", typeof this.client); // Log the type for clarity
  
      // Loop through client and log each element
      this.client.forEach((element:any) => console.log(element));
    });
  }
    
  }

  
