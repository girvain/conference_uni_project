import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  private talksUrl = 'http://localhost:3000';
  httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true,
  };

  // httpOptions = { headers: new HttpHeaders({
  //     'Content-Type': '*',
  //     'Access-Control-Allow-Credentials': 'true',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  //     'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Access-Control-Allow-Origin',
  //   }), withCredentials: true, observe: 'response'};

  constructor(private http: HttpClient) { }

  getTalks(): Observable<any> {
    return this.http.get<any>(this.talksUrl + '/talks/all');
  }

    postRating(rating: any, id: string): Observable<any> {
        return this.http.post<any>(this.talksUrl + `/talks/rate/${id}`, rating, this.httpOptions);
    }

    postTalk(talk: any): Observable<any> {
        return this.http.post<any>(this.talksUrl + `/talks/add`, talk, this.httpOptions);
    }

    login(credentials: any): Observable<any> {
        console.log(credentials);
        return this.http.post<any>(this.talksUrl + '/users/login', credentials, this.httpOptions);
    }
}

