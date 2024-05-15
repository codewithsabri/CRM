import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model'; // Import your order model
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private apiUrl = 'http://localhost:3000/orders'; // Replace with your orders API endpoint

  constructor(private http: HttpClient) {}

  public getOrders(): Observable<Order[]> {
    // Get all orders
    return this.http.get<Order[]>(this.apiUrl);
  }

  getOrder(): Observable<Order> {
    // Get a specific order
    const url = `${this.apiUrl}`;
    return this.http.get<Order>(url);
  }

  addOrder(order: Order): Observable<Order> {
    // Create a new order
    return this.http.post<Order>(this.apiUrl, order);
  }

  updateOrder(id: string, order: Order): Observable<Order> {   // Update an order
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Order>(url, order);
  }

  deleteOrder(id: string): Observable<any> {
    // Delete an order
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
