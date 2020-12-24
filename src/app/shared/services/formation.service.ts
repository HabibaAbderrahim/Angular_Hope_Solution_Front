import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formation} from '../model/formation';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private url = environment.baseUrl + '/formation' ;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Formation[]>{
    // @ts-ignore
    return this.httpClient.get<Formation[]>(this.url + '/getAll');
  }

  public getScoreFor(id: BigInteger): Observable<number>{
    // @ts-ignore
    return this.httpClient.get<number>(this.url + '/scoring' + '/' + id);
  }

  public getAllSorted(): Observable<Formation[]>{
    // @ts-ignore
    return this.httpClient.get<Formation[]>(this.url + '/getAllSorted');
  }

  public save(form: Formation): Observable<any>{
    return this.httpClient.post(this.url + '/add' , form);
  }

  public update(form: Formation): Observable<any>{
    return this.httpClient.put(this.url + '/edit' , form);
  }

  public delete(id: BigInteger): Observable<any>{
    return this.httpClient.delete(this.url + '/del' + '/' + id);
  }

  public findById(id: BigInteger): Observable<Formation>{
    // @ts-ignore
    return this.httpClient.get<Formation>(this.url + 'find' + '/' + id);
  }

  public findByName(name: string): Observable<Formation>{
    // @ts-ignore
    return this.httpClient.get<Formation>(this.url + 'find' + '/' + name);
  }

}
