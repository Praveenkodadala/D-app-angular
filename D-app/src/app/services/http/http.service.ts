import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/index';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {


  private Url = '/api/'  // URL to web api
private anotherUrl = "http://localhost:3000/api"
  constructor(private http: HttpClient, private router: Router) {}

  getPosts(): Observable<any> {
    return this.http.get(this.Url);
  }
  profilePosts(data:any)   : Observable<any> {
    return this.http.post(this.Url, data)

  }

}
