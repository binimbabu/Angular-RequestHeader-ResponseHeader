import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private http: HttpClient = inject(HttpClient);
  constructor() { }
  getToUsers() : Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos', {
      observe: 'response'
    })
  }
}
