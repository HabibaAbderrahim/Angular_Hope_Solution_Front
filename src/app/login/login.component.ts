import { Component, OnInit } from '@angular/core';
import {Users} from '../shared/model/users';
import {AuthentificationService} from '../shared/auth/authentification.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Users = new Users();
  constructor(private authenticationService: AuthentificationService , private  messageService: MessageService , private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    this.authenticationService.authentification(this.user).subscribe(res => {
      // inspecter app headers (k , authorization value token)
      const token = res.headers.get('Authorization');
      this.router.navigate(['/candidat']);
      // console.log(token);
      // inspect application local storage
      localStorage.setItem('token', token);
      // this.router.navigate(['/list-user']);
    }, err => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Mot de passe Incorrect'});

    });

  }

}
