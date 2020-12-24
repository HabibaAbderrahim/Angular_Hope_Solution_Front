import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ListCoalision} from '../model/list-coalision';

@Injectable({
  providedIn: 'root'
})
export class ListCoalService {

  private url = environment.baseUrl + '/coalition' ;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<ListCoalision[]>{
    // @ts-ignore
    return this.httpClient.get<ListCoalision[]>(this.url + '/getAll');
  }

  public getBtwn(): Observable<ListCoalision[]>{
    // @ts-ignore
    return this.httpClient.get<ListCoalision[]>(this.url + '/getBtwn');
  }


  public save(LCoal: ListCoalision): Observable<any>{
    return this.httpClient.post(this.url + '/add' , LCoal);
  }

  public update(LCoal: ListCoalision): Observable<any>{
    return this.httpClient.put(this.url + '/edit' , LCoal);
  }
  public delete(id: BigInteger): Observable<any>{
    return this.httpClient.delete(this.url + '/del' + '/' + id);
  }

  public findById(id: BigInteger): Observable<ListCoalision>{
    // @ts-ignore
    return this.httpClient.get<ListCoalision>(this.url + 'find' + '/' + id);
  }

  public findByGouv(gouv: string): Observable<ListCoalision>{
    // @ts-ignore
    return this.httpClient.get<ListCoalision>(this.url + 'find' + '/' + gouv);
  }

}
