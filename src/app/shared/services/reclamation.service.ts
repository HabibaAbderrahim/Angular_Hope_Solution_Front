import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Reclamation} from '../model/reclamation';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private url = environment.baseUrl + '/Reclamatioon' ;

  constructor(private httpClient: HttpClient) { }


  public save(Rec: Reclamation): Observable<any>{
    return this.httpClient.post(this.url + '/add' , Rec);
  }

  public update(Rec: Reclamation): Observable<any>{
    return this.httpClient.put(this.url + '/edit' , Rec);
  }
  public delete(id: BigInteger): Observable<any>{
    return this.httpClient.delete(this.url + '/del' + '/' + id);
  }

  public findById(id: BigInteger): Observable<Reclamation>{
    // @ts-ignore
    return this.httpClient.get<Reclamation>(this.url + 'find' + '/' + id);
  }
}
