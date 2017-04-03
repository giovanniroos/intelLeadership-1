import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';
import {UserService} from './services/users/user.service'

platformBrowserDynamic().bootstrapModule(AppModule, [UserService]);
