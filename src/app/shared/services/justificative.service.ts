import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Justification} from '../model/justification';

@Injectable({
  providedIn: 'root'
})
export class JustificativeService {

  private url = environment.baseUrl + '/justif' ;

  constructor(private httpClient: HttpClient) { }

  public save(justif: Justification): Observable<any>{
    return this.httpClient.post(this.url + '/add' , justif);
  }

  public update(justif: Justification): Observable<any>{
    return this.httpClient.put(this.url + '/edit' , justif);
  }
  public delete(id: BigInteger): Observable<any>{
    return this.httpClient.delete(this.url + '/del' + '/' + id);
  }

  public findById(id: BigInteger): Observable< Justification>{
    // @ts-ignore
    return this.httpClient.get< Justification>(this.url + 'find' + '/' + id);
  }

  public findByName(name: string): Observable< Justification>{
    // @ts-ignore
    return this.httpClient.get<Justificatif>(this.url + 'find' + '/' + name);
  }

}
