import { Component, Input } from '@angular/core';
import { Client } from '../client.model';
import { ClientsService } from '../clients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-edit-clients',
  templateUrl: './page-edit-clients.component.html',
  styleUrl: './page-edit-clients.component.scss',
})
export class PageEditClientsComponent {
  @Input() initialId: string | null = null; // Optional initial ID
  clientId: string = ''; // User-entered ID (initially empty)
  client: Client = {
    id: '',
    name: '',
    state: '',
    tva: 0,
    totalCaHt: 0,
    comment: '',
  }; // Initialize client object with default values
  editSuccess = false; // Flag for successful edit (optional)
  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clientId = params['id']; // Access the 'id' parameter
      // console.log('Client ID:', this.clientId);
    });
    if (this.initialId) {
      // Use the initialId if provided, but allow user to change it
      this.clientId = this.initialId;
    }
  }

  onSubmit() {
    // Update the client object with the user's changes

    // this.clientId = this.client.id; // Update ID

    // console.log('Client:', this.client);
    // console.log('Client ID:', this.clientId);

    // Call the updateClient method with the updated client object
    this.clientsService.updateClient(this.clientId, this.client).subscribe({
      next: (updatedClient) => {
        console.log('Client updated:', updatedClient);
        this.editSuccess = true; // Set flag for success (optional)
      },
      error: (error) => {
        console.error('Error updating client:', error);
        // Handle errors appropriately (e.g., display error message)
      },
    });
  }
}
