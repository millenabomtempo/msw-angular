import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUser } from './models'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<IUser[]>('http://localhost:4200/api/users')
  }
}
