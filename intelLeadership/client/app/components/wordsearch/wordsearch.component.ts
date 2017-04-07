import {Component, ViewChild, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import {UserService} from '../../services/users/user.service';

@Component({
  selector: 'wordsearch',
  moduleId: module.id,
  templateUrl: 'wordsearch.html',
  providers: [UserService],
  styleUrls: ['../../css/forms.css']
})
export class WordsearchComponent implements OnInit {
    wordForm: FormGroup;
    users: Array<any>;
    userObject: any; 
  
    constructor(private _userService: UserService, private fb: FormBuilder) {
        this.populateForm();
    }

    ngOnInit(): void {
        this.populateForm();
    }

    populateForm(){
        this.wordForm = this.fb.group({
            userSelected: new FormControl('', [Validators.required]),
            word1: new FormControl('', [Validators.required]),
            word2: new FormControl('', [Validators.required]),
            word3: new FormControl('', [Validators.required]),
            word4: new FormControl('', [Validators.required]),
            word5: new FormControl('', [Validators.required]),
            word6: new FormControl('', [Validators.required]),
            word7: new FormControl('', [Validators.required]),
            word8: new FormControl('', [Validators.required]),
            word9: new FormControl('', [Validators.required]),
            word10: new FormControl('', [Validators.required]),
        });

        this._userService.getUserList().subscribe(response => {
            this.users = response; 
        });
    }
}
