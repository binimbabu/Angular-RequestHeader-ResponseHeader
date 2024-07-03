import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers() : Observable<any>{
    // const httpHeaders = new HttpHeaders({
    //   'Authorization': 'Sample Auth Token'
    // })
    // return  this.http.get('https://jsonplaceholder.typicode.com/todos', {
    //   headers : httpHeaders
    //  });


    // const httpHeaders = new HttpHeaders({
    //   'Authorization': 'Sample Auth Token'
    // })
  //   const updatedHeader = httpHeaders.set('channel', 'Bini');
  //  return  this.http.get('https://jsonplaceholder.typicode.com/todos', {
  //   headers : updatedHeader
  //  });

  const httpHeaders = new HttpHeaders({
      'Authorization': 'Sample Auth Token',
      channel: 'Babu'
    })
    const updatedHeader = httpHeaders.set('channel', 'Bini');
    httpHeaders.get('channel');
   return  this.http.get('https://jsonplaceholder.typicode.com/todos', {
    headers : updatedHeader
   });
  }
}
