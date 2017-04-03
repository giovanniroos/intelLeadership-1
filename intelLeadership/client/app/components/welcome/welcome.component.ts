import {Component, ViewChild } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {Router} from '@angular/router';

import {UserService} from '../../services/users/user.service';
import { TabsetComponent } from 'ng2-bootstrap';

@Component({
  selector: 'welcomePage',
  moduleId: module.id,
  templateUrl: 'welcome.html',
  providers: [UserService]
})
export class WelcomeComponent {
  users: Array<any>;
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  constructor(private _userService: UserService,
     private _routing: Router) {
    _userService.getUserList().subscribe(response => {
      this.users = response;
    });
  }

  public alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }
 
  selectTab(tab_id: number) {
      this.staticTabs.tabs[tab_id].active = true;
  }
 
  disableEnable() {
    this.staticTabs.tabs[2].disabled = ! this.staticTabs.tabs[2].disabled
  }  
}
