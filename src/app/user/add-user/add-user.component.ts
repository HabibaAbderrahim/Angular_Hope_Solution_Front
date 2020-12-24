import { Component, OnInit } from '@angular/core';
import {Users} from '../../shared/model/users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: Users = new Users();
  confirmPwd: string;
  constructor() { }

  ngOnInit(): void {
  }

}
