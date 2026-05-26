import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = '';
  error = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getHello().subscribe({
      next: (data) => this.message = data.message,
      error: () => this.error = 'Could not connect to Django backend.'
    });
  }
}
