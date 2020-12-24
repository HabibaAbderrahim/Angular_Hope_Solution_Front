import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListPartisienne} from '../model/list-partisienne';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListParService {

  private url = environment.baseUrl + '/part' ;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<ListPartisienne[]>{
    // @ts-ignore
    return this.httpClient.get<ListPartisienne[]>(this.url + '/getAll');
  }

  public getBtwn(): Observable<ListPartisienne[]>{
    // @ts-ignore
    return this.httpClient.get<ListPartisienne[]>(this.url + '/getBtwn');
  }


  public save(LPart: ListPartisienne): Observable<any>{
    return this.httpClient.post(this.url + '/add' , LPart);
  }

  public update(LPart: ListPartisienne): Observable<any>{
    return this.httpClient.put(this.url + '/edit' , LPart);
  }
  public delete(id: BigInteger): Observable<any>{
    return this.httpClient.delete(this.url + '/del' + '/' + id);
  }

  public findById(id: BigInteger): Observable<ListPartisienne>{
    // @ts-ignore
    return this.httpClient.get<ListPartisienne>(this.url + 'find' + '/' + id);
  }

  public findByGouv(gouv: string): Observable<ListPartisienne>{
    // @ts-ignore
    return this.httpClient.get<ListPartisienne>(this.url + 'find' + '/' + gouv);
  }

}
