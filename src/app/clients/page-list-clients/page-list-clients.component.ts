import { Component } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Client } from '../client.model';
import { Router } from '@angular/router'; //

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss',
})
export class PageListClientsComponent {
  clients: Client[] = []; // Array to hold client data
  selectedClientId: string = ''; // Optional selected ID for editing

  constructor(private clientsService: ClientsService, private router: Router) {}

  ngOnInit() {
    this.clientsService.getData().subscribe((clients) => {
      if (Array.isArray(clients)) {
        this.clients = clients.map((client) => ({ ...client } as Client)); // Map and cast individual objects
      } else {
        console.error('Unexpected response format from getData');
      }
    });
  }

  editClient(id: string) {
    this.selectedClientId = id;
    console.log(this.selectedClientId);
    this.handleClick(this.selectedClientId);
    // Optionally pre-populate the form with client data
  }

  deleteClient(id: string) {
    console.log(id);
    this.clientsService.deleteClient(id).subscribe({
      next: (deletedClient) => {
        console.log('Client updated:', deletedClient);
        this.clients = this.clients.filter(client => client.id !== id);
        // Set flag for success (optional)
      },
      error: (error) => {
        console.error('Error updating client:', error);
        // Handle errors appropriately (e.g., display error message)
      },
    });
  }

  handleClick(id: string) {
    console.log('bouton clique');
    console.log(id);
    // Optional: Perform actions before redirecting (e.g., confirmation)
    this.router.navigate(['/clients/edit', id]);
  }

  onSubmit() {
    // Update the client object with the user's changes

    // this.clientId = this.client.id; // Update ID

    console.log('Client:', this.clients);
    console.log('Client ID:', this.selectedClientId);

    // Call the updateClient method with the updated client object
  }
}
