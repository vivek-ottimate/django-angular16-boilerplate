import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { of, throwError, NEVER } from 'rxjs';

describe('AppComponent', () => {
  let mockApiService: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    mockApiService = jasmine.createSpyObj('ApiService', ['getHello']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: ApiService, useValue: mockApiService }]
    });
  });

  it('should create the app', () => {
    mockApiService.getHello.and.returnValue(NEVER);
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show connecting status before API responds', () => {
    mockApiService.getHello.and.returnValue(NEVER);
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.status')?.textContent?.trim()).toBe('Connecting to backend...');
  });

  it('should display message from backend on success', () => {
    mockApiService.getHello.and.returnValue(of({ message: 'Hello from Django!' }));
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.message')?.textContent?.trim()).toBe('Hello from Django!');
  });

  it('should display error when backend is unreachable', () => {
    mockApiService.getHello.and.returnValue(throwError(() => new Error('Network error')));
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.error')?.textContent?.trim()).toBe('Could not connect to Django backend.');
  });
});
