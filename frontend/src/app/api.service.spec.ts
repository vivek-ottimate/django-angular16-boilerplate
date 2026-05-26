import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET /api/hello/ and return message', () => {
    service.getHello().subscribe(data => {
      expect(data).toEqual({ message: 'Hello from Django!', ping_count: 1 });
    });

    const req = httpMock.expectOne('/api/hello/');
    expect(req.request.method).toBe('GET');
    req.flush({ message: 'Hello from Django!', ping_count: 1 });
  });
});
