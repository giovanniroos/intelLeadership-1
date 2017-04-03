import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import {UserService} from '../../services/users/user.service';

@Component({
  selector: 'userBlock',
  moduleId: module.id,
  templateUrl: 'user.html',
  providers: [UserService],
  styleUrls: ['../../css/forms.css']
})
export class UserComponent implements OnInit {
  users: Array<any>;
  userForm: FormGroup;

  constructor(private _userService: UserService, private fb: FormBuilder) {
      this.userForm = this.fb.group({
        userSelected: new FormControl(),
      });

      this.populateForm();
  }

  ngOnInit(): void {
        
  }

  populateForm(){
        this.userForm = this.fb.group({
            userSelected: new FormControl('', [Validators.required]),
        });

        this._userService.getUserList().subscribe(response => {
            this.users = response; 
        });
    }
}
