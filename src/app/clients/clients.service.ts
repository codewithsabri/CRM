import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  public sumUp(a: number, b: number): number {
    return a + b;
  }

  


  public getData() {
    return this.http.get('http://localhost:3000/clients');
  }
}
