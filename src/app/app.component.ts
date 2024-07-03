import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UserService } from './user.service';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users?: any[];
  loading: boolean = false;
  contentBoolean: boolean = false;
  apiService : ApiService = inject(ApiService);
  constructor(private userService: UserService) {
    this.loading = true;
    this.userService.getUsers().subscribe((result: any) => {
      if (result.length > 0) {
        this.contentBoolean = true;
        this.users = result;
        this.loading = false;
      }
    }, (error)=>{
      alert("Something went wrong" + error);
    })

    this.apiService.getToUsers().subscribe((data: HttpResponse<any>)=>{
     console.log("Data", data.body);
     console.log("All keys in Response header", data.headers.keys());
     console.log("Get one key content type", data.headers.get('content-type'));
     data.headers.keys().forEach((key: any)=>{
      console.log(data.headers.get(key));
     })
    })
  }
}
