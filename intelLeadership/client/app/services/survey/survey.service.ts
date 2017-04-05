import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SurveyService{

  constructor (private http: Http){

  }

   saveSurvey(user: any){  
    var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post("/api/survey/save", 
        JSON.stringify(user), {headers: headers})
                 .map(response => response.json());
   }
}
