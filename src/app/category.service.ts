import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // ✅ très important pour l’injection automatique
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get('http://localhost:8000/api/categories'); // remplace par ton endpoint réel
  }
}
