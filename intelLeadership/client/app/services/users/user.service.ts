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

   saveUser(user: any){  
    var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post("/api/user/save", 
        JSON.stringify(user), {headers: headers})
                 .map(response => response.json());
   }

   getOneUser(id: String){
    return this.http.get('/api/user/'  + id)
                .map(response => response.json());
   }
}
