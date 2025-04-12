import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProduitService {
  private apiUrl = 'http://localhost:8000/api/produits'; // adresse Laravel

  constructor(private http: HttpClient) {}

  getProduits(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getProduitDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
}
