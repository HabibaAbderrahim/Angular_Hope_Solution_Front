import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Experience} from '../model/experience';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private url = environment.baseUrl + '/Expert' ;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Experience[]>{
    // @ts-ignore
    return this.httpClient.get<Experience[]>(this.url + '/getAll');
  }

  public getScoreExp(id: BigInteger): Observable<number>{
    // @ts-ignore
    return this.httpClient.get<number>(this.url + '/scoring' + '/' + id);
  }

  public getAllSorted(): Observable<Experience[]>{
    // @ts-ignore
    return this.httpClient.get<Experience[]>(this.url + '/getAllSorted');
  }

  public save(exper: Experience): Observable<any>{
    return this.httpClient.post(this.url + '/add' , exper);
  }

  public update(exper: Experience): Observable<any>{
    return this.httpClient.put(this.url + '/edit' , exper);
  }
  public delete(id: BigInteger): Observable<any>{
    return this.httpClient.delete(this.url + '/del' + '/' + id);
  }

  public findById(id: BigInteger): Observable<Experience>{
    // @ts-ignore
    return this.httpClient.get<Experience>(this.url + 'find' + '/' + id);
  }

  public findByName(name: string): Observable<Experience>{
    // @ts-ignore
    return this.httpClient.get<Experience>(this.url + 'find' + '/' + name);
  }

}
