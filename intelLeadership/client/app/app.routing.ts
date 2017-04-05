import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WelcomeComponent} from './components/welcome/welcome.component';
import {FeedbackComponent} from './components/feedback/feedback.component';
import {SurveyComponent} from './components/survey/survey.component';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'survey', component: SurveyComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
