import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Candidats} from '../model/candidats';
import {Cv} from '../model/cv';
import {Users} from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  url = environment.baseUrl + '/users' ;


  constructor(  private httpClient: HttpClient) { }

  public getAll(): Observable<Users[]>{
    // @ts-ignore
    return this.httpClient.get<Users[]>(this.url);
  }

  public save(user: Users): Observable<any>{

    return this.httpClient.post(this.url + '/add' , user);
  }

  public update(user: Users): Observable<any>{
    return this.httpClient.put(this.url + '/edit' , user);
  }
  public delete(id: BigInteger): Observable<any>{
    return this.httpClient.delete(this.url + '/del' + '/' + id);
  }

  public findById(id: BigInteger): Observable<Users>{
    // @ts-ignore
    return this.httpClient.get<Users>(this.url + 'find' + '/' + id);
  }
}
