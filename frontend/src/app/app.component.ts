import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';
  pingCount: number | null = null;
  error = '';
  loading = false;

  constructor(private api: ApiService) {}

  ping() {
    this.loading = true;
    this.error = '';
    this.api.getHello().subscribe({
      next: (data) => {
        this.message = data.message;
        this.pingCount = data.ping_count;
        this.loading = false;
      },
      error: () => {
        this.error = 'Could not connect to Django backend.';
        this.loading = false;
      }
    });
  }
}
