import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Cv} from '../model/cv';


@Injectable({
  providedIn: 'root'
})
export class CvService {

  private  url = environment.baseUrl + '/cv' ;
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Cv[]>{
    // @ts-ignore
    return this.httpClient.get<Cv[]>(this.url + '/getAll');
  }

  public findById(id): Observable<Cv>{
    // @ts-ignore
    return this.httpClient.get<Cv>(this.url + '/find' + '/' + id);
  }
}
