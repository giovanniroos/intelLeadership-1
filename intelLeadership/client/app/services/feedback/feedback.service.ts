import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedbackService{

  constructor (private http: Http){

  }

   getAllFeedback(){
     return this.http.get('/api/feedbackList')
                .map(response => response.json());
   }

   saveFeedback(user: any){  
    var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post("/api/feedback/save", 
        JSON.stringify(user), {headers: headers})
                 .map(response => response.json());
   }
}
