import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidats} from '../model/candidats';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private  url = environment.baseUrl + '/candidat' ;
  constructor( private httpClient: HttpClient) { }


  public getAll(): Observable<Candidats[]>{
    // @ts-ignore
    return this.httpClient.get<Candidats[]>(this.url + '/getAll');
  }

   public save(candidat: Candidats): Observable<any>{
     return this.httpClient.post(this.url + '/add' , candidat);
        }

  public update(candidat: Candidats): Observable<any>{
    return this.httpClient.put(this.url + '/edit' , candidat);
  }
  public delete(id): Observable<any>{
    return this.httpClient.delete(this.url + '/del' + '/' + id);
  }

  public findById(id): Observable<Candidats>{
    // @ts-ignore
    return this.httpClient.get<Candidats>(this.url + '/find' + '/' + id);
  }
}

