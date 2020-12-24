import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Users} from '../model/users';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private url = environment.baseUrl + '/login';
  constructor(private httpClient: HttpClient) { }

  public authentification(user: Users){
    // Token mawjoud del header de request
     return this.httpClient.post(this.url, user , {observe: 'response'});
  }

  public  hasAuthorities(authority): boolean {
    let valid = false ;
    const token = localStorage.getItem('token');
    const jwtHelper = new JwtHelperService();
    const  decodedToken = jwtHelper.decodeToken(token); // {}
    const roles = decodedToken.roles ; // roles fel Token jwt
    roles.forEach(role => {
      if (authority.includes(role)) {
        valid = true;
      }
    });
    return valid ;
  }

  // byebye
  logout(){
    localStorage.removeItem('token');
    location.reload();
  }
}
