import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Activity} from '../model/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private url = environment.baseUrl + '/activity' ;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Activity[]>{
    // @ts-ignore
    return this.httpClient.get<Activity[]>(this.url + '/getAll');
  }

  public getScoreAct(id: BigInteger): Observable<number>{
    // @ts-ignore
    return this.httpClient.get<number>(this.url + '/scoring' + '/' + id);
  }

  public getAllSorted(): Observable<Activity[]>{
    // @ts-ignore
    return this.httpClient.get<Activity[]>(this.url + '/getAllSorted');
  }

  public save(activ: Activity): Observable<any>{
    return this.httpClient.post(this.url + '/add' , activ);
  }

  public update(activ: Activity): Observable<any>{
    return this.httpClient.put(this.url + '/edit' , activ);
  }
  public delete(id: BigInteger): Observable<any>{
    return this.httpClient.delete(this.url + '/del' + '/' + id);
  }

  public findById(id: BigInteger): Observable<Activity>{
    // @ts-ignore
    return this.httpClient.get<Activity>(this.url + 'find' + '/' + id);
  }

  public findByName(name: string): Observable<Activity>{
    // @ts-ignore
    return this.httpClient.get<Activity>(this.url + 'find' + '/' + name);
  }

}
