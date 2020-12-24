import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DossierCriminel} from '../model/dossier-criminel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  private url = environment.baseUrl + '/dossierjudiciare' ;

  constructor(private httpClient: HttpClient) { }


  public getScoreDJ(id: BigInteger): Observable<number>{
    // @ts-ignore
    return this.httpClient.get<number>(this.url + '/scoring' + '/' + id);
  }

  public getAllSorted(): Observable<DossierCriminel[]>{
    // @ts-ignore
    return this.httpClient.get<DossierCriminel[]>(this.url + '/getAllSorted');
  }


  public save(dj: DossierCriminel): Observable<any>{
    return this.httpClient.post(this.url + '/add' , dj);
  }

  public update(dj: DossierCriminel): Observable<any>{
    return this.httpClient.put(this.url + '/edit' , dj);
  }
  public delete(id: BigInteger): Observable<any>{
    return this.httpClient.delete(this.url + '/del' + '/' + id);
  }

  public findById(id: BigInteger): Observable<DossierCriminel>{
    // @ts-ignore
    return this.httpClient.get<DossierCriminel>(this.url + 'find' + '/' + id);
  }


}
