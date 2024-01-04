import { Component } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: IUser[] = []

  constructor(private userServive: UserService) {}

  ngOnInit() {
    this.userServive.getUser().subscribe(users => {
      this.users = users
    })
  }
}
