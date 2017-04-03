import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{

  constructor (private http: Http){

  }

   getUserList(){
     return this.http.get('/api/userList')
                .map(response => response.json());
   }
}
