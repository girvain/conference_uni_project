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

  constructor(private http: HttpClient) { }

  getTalks(): Observable<any> {
    return this.http.get<any>(this.talksUrl + '/talks/all');
  }

   getMyTalks(): Observable<any> {
    return this.http.post<any>(this.talksUrl + '/talks/user',{ }, this.httpOptions);
  }

    postRating(rating: any, id: string): Observable<any> {
        return this.http.post<any>(this.talksUrl + `/talks/rate/${id}`, rating, this.httpOptions);
    }

    postTalk(talk: any): Observable<any> {
        return this.http.post<any>(this.talksUrl + `/talks/add`, talk, this.httpOptions);
    }

    removeTalk(talk: any): Observable<any> {
        return this.http.post<any>(this.talksUrl + `/talks/remove`, talk, this.httpOptions);
    }

    login(credentials: any): Observable<any> {
        console.log(credentials);
        return this.http.post<any>(this.talksUrl + '/users/login', credentials, this.httpOptions);
    }

    logout(): Observable<any> {
        return this.http.get<any>(this.talksUrl + '/users/logout', this.httpOptions);
    }
}

