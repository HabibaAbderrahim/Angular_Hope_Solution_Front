import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {ListIndependant} from '../model/list-independant';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListIndepService {

  private url = environment.baseUrl + '/indp' ;

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  public getAll(): Observable<ListIndependant[]>{
    // @ts-ignore
    return this.httpClient.get<ListIndependant[]>(this.url + '/getAll');
  }

  public getBtwn(): Observable<ListIndependant[]>{
    // @ts-ignore
    return this.httpClient.get<ListIndependant[]>(this.url + '/getBtwn');
  }


  public save(LIndp: ListIndependant): Observable<any>{
    return this.httpClient.post(this.url + '/add' , LIndp);
  }

  public update(LIndp: ListIndependant): Observable<any>{
    return this.httpClient.put(this.url + '/edit' , LIndp);
  }
  public delete(id: BigInteger): Observable<any>{
    return this.httpClient.delete(this.url + '/del' + '/' + id);
  }

  public findById(id: BigInteger): Observable<ListIndependant>{
    // @ts-ignore
    return this.httpClient.get<ListIndependant>(this.url + 'find' + '/' + id);
  }

  public findByGouv(gouv: string): Observable<ListIndependant>{
    // @ts-ignore
    return this.httpClient.get<ListIndependant>(this.url + 'find' + '/' + gouv);
  }

}
