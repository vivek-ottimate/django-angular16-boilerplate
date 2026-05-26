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
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show nothing before ping button is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.message')).toBeNull();
    expect(el.querySelector('.count')).toBeNull();
    expect(el.querySelector('.error')).toBeNull();
  });

  it('should display message and ping count on success', () => {
    mockApiService.getHello.and.returnValue(of({ message: 'Hello from Django!', ping_count: 5 }));
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.componentInstance.ping();
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.message')?.textContent?.trim()).toBe('Hello from Django!');
    expect(el.querySelector('.count')?.textContent?.trim()).toBe('Ping count: 5');
  });

  it('should display error when backend is unreachable', () => {
    mockApiService.getHello.and.returnValue(throwError(() => new Error('Network error')));
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.componentInstance.ping();
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.error')?.textContent?.trim()).toBe('Could not connect to Django backend.');
  });

  it('should call getHello when ping button is clicked', () => {
    mockApiService.getHello.and.returnValue(NEVER);
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    (fixture.nativeElement as HTMLElement).querySelector('button')?.click();
    expect(mockApiService.getHello).toHaveBeenCalledTimes(1);
  });
});
