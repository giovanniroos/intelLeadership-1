import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FeedbackService} from '../../services/feedback/feedback.service'

@Component({
  selector: 'feedback',
  moduleId: module.id,
  templateUrl: 'feedback.html',
  styleUrls: ['../../css/forms.css'],
  providers: [FeedbackService]
})
export class FeedbackComponent {
  users: Array<any>;
  escalationForm: FormGroup;
  escalationObj: any;
  escalationList: Array<any>;

  constructor(private fb: FormBuilder, private _feedbackService: FeedbackService) {
      this.escalationForm = this.fb.group({
      issue: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])});

      this._feedbackService.getAllFeedback()
      .subscribe(data => {
          this.escalationList = data;
      });
  }

  submitFeedback(){
     if (this.escalationForm.valid) {      
        this.escalationObj = this.escalationForm.value;
        this.escalationObj.status = 'Open';
       this._feedbackService.saveFeedback(this.escalationObj)
        .subscribe(data => {
            this._feedbackService.getAllFeedback()
            .subscribe(data => {
            this.escalationList = data;
      });
        });
     }else{
       console.log('Invalid');
     }
  }
}
