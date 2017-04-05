import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import {UserService} from '../../services/users/user.service';

@Component({
  selector: 'eggHuntBlock',
  moduleId: module.id,
  templateUrl: 'eggHunt.html',
  providers: [UserService],
  styleUrls: ['../../css/forms.css']
})
export class EggHuntComponent implements OnInit {
  users: Array<any>;
  userObject: any; 
  eggForm: FormGroup;
  saved: Boolean;
  cantSave: Boolean;
  cheating: Boolean;
  jasonLoggedIn: Boolean;
  possibleBarCodes = [751,998,254,155,681,132,794,986,217,798,762,297,749,242,608,887,694,237,619,580,826,509,633,73,720,947,334,868,924,509,936,947,269,845,826,19,332,96,874];

  constructor(private _userService: UserService, private fb: FormBuilder) {
      this.eggForm = this.fb.group({
        userSelected: new FormControl(),
        barcode: new FormControl(),
      });

      this.saved = false;
      this.cantSave = false;
      this.cheating = false;
      this.jasonLoggedIn = false;
      this.populateForm();
  }

  ngOnInit(): void {
        
  }

  populateForm(){
        this.eggForm = this.fb.group({
            userSelected: new FormControl('', [Validators.required]),
            barcode: new FormControl('', [Validators.required]),
        });

        this._userService.getUserList().subscribe(response => {
            this.users = response; 
        });
    }

    saveData(){
        if(this.eggForm.valid){
            let validBarCode = false;
            this.userObject = this.eggForm.value;
            console.log(this.userObject.userSelected.userName);
            for(let c of this.possibleBarCodes){
                if(c == this.userObject.barcode){
                    console.log('FOUND MATCH : ' + c);
                    validBarCode = true;
                    break;
                }
            }

            if(validBarCode){
                this._userService.getOneUser(this.userObject.userSelected._id)
                .subscribe(existingUser => {
                    if(existingUser.barCode == null){
                        if(this.userObject.userSelected.userName == "Jason"){
                            this.jasonLoggedIn = true;
                            this.saved = false;
                            this.cantSave = false;
                            this.cheating = false;
                        }else{
                            this._userService.saveUser(this.userObject)
                                .subscribe(data => {
                                this.saved = true;
                                this.cantSave = false;
                                this.cheating = false;
                                this.jasonLoggedIn = false;
                            });
                        }
                    }else{
                        this.cantSave = true;
                        this.saved = false;
                        this.cheating = false;
                        this.jasonLoggedIn = false;
                    }
                });
            }else{
                this.cheating = true;
                this.saved = false;
                this.cantSave = false;
                this.jasonLoggedIn = false;
            }
        }
        
    }
}
