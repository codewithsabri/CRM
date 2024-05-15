import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ClientsService {

  private apiUrl = 'http://localhost:3000/clients';
  constructor(private http: HttpClient) {}

  addProduct(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }

  public getData() {
    return this.http.get('http://localhost:3000/clients');
  }

  public getClient(id: string): Observable<Client> {
    const url = `http://localhost:3000/clients/${id}`;  // Build URL with ID
    return this.http.get<Client>(url);
  }

  updateClient(id: string, client: Client): Observable<Client> {
    const url = `${this.apiUrl}/${id}`; // Build URL with ID for update
    return this.http.put<Client>(url, client);
  }

  deleteClient(clientId: string): Observable<any> {
    const url = `${this.apiUrl}/${clientId}`; // Construct URL with ID
    return this.http.delete(url);
  }
  
}
