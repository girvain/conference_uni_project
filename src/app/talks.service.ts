import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  private talksUrl = 'http://localhost:3000/talks/all';

  constructor(private http: HttpClient) { }

  getTalks(): Observable<any> {
    return this.http.get<any>(this.talksUrl);
  }
}
