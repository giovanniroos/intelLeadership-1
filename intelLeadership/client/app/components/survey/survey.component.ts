import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import {SurveyService} from '../../services/survey/survey.service';

@Component({
  selector: 'surveycomp',
  moduleId: module.id,
  templateUrl: 'survey.html',
  providers: [SurveyService],
})
export class SurveyComponent implements OnInit{

    surveyForm: FormGroup;
    surveyObj: any;
    saved: Boolean;

    constructor(private fb: FormBuilder, private _surveyService: SurveyService) {
        this.saved = false;
        this.populateForm();
    }

     ngOnInit(): void {
        this.populateForm();
    }

    populateForm(){
        this.surveyForm = this.fb.group({
        experienceRating: new FormControl(''),
        conceptRating: new FormControl(''),
        goodJobRating: new FormControl(''),
        comments: new FormControl('')});
    }

    saveSurvey(){
        if (this.surveyForm.valid) {      
        this.surveyObj = this.surveyForm.value;
        this._surveyService.saveSurvey(this.surveyObj)
            .subscribe(data => {
                this.saved = true;
            }); 
     }else{
       console.log('Invalid');
     }
    }
}
