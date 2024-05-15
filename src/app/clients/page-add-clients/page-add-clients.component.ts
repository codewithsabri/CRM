import { Component } from '@angular/core';
import {Client} from '../client.model';
import { ClientsService } from '../clients.service';


@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrl: './page-add-clients.component.scss'
})
export class PageAddClientsComponent {
  newClient: Client= {} as Client; 
  clientAdded: boolean = false; 

  constructor(private clientsService : ClientsService){}

  onSubmit() {
    this.clientsService.addProduct(this.newClient)
      .subscribe({
        next: (addedClient) => {
          // Handle successful Client addition (e.g., clear form, show success message)
          console.log('Client added:', addedClient);
          this.newClient = {} as Client; // Clear the form for new input
        },
        error: (error) => {
          // Handle error during product addition (e.g., show error message)
          console.error('Error adding product:', error);
        }
      });
  }



}
