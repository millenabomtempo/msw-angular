import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import '../mocks/browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { IUser } from './models';
import { HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  let http: HttpClient;
  let mockUserService: UserService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    http = TestBed.inject(HttpClient);
    mockUserService = TestBed.inject(UserService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('receives a mocked response to a REST API request', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance;

    const response = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      nome: `Usuário ${index + 1}`,
    }));

    http
      .get<IUser[]>('http://localhost:4200/api/users')
      .subscribe((data) => expect(data).toEqual(response));
  });
});
