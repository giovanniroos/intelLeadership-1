import {Component, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {ModalDirective} from 'ng2-bootstrap'

import {UserService} from '../../services/users/user.service';
import {TabsetComponent} from 'ng2-bootstrap';

@Component({
  selector: 'welcomePage',
  moduleId: module.id,
  templateUrl: 'welcome.html',
  providers: [UserService]
})
export class WelcomeComponent {
  users: Array<any>;
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  @ViewChild('lgModal') public lgModal:ModalDirective;

  constructor(private _userService: UserService,
     private _routing: Router) {
    
  }

  openUserModal(){
    this._userService.getUserList().subscribe(response => {
      this.users = response;
    });
    this.lgModal.show();
  }

  redirectToSurvey(){
    this._routing.navigate(['/survey']);
  }

  redirectToEscalationsForm(){
    this._routing.navigate(['/feedback']);
  }
}
