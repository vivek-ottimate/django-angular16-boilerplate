import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getHello(): Observable<{ message: string; ping_count: number }> {
    return this.http.get<{ message: string; ping_count: number }>(`${this.apiUrl}/hello/`);
  }
}
