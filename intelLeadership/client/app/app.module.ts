import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { routing, appRoutingProviders } from './app.routing';
import { ChartModule } from 'angular2-highcharts';
import { AlertModule, CollapseModule, AccordionModule, RatingModule, ModalModule, CarouselModule } from 'ng2-bootstrap';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { TabsModule } from 'ng2-bootstrap';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserComponent } from './components/user/user.component';
import { EggHuntComponent } from './components/egghunt/egghunt.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SurveyComponent } from './components/survey/survey.component';
import { VideoComponent } from './components/video/video.component';
import { WordsearchComponent } from './components/wordsearch/wordsearch.component';

@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule, 
                  FormsModule, 
                  routing, 
                  ReactiveFormsModule, 
                  MaterialModule.forRoot(),
                  ChartModule,
                  AlertModule.forRoot(),
                  CollapseModule.forRoot(),
                  AccordionModule.forRoot(),
                  RatingModule.forRoot(),
                  ModalModule.forRoot(),
                  CarouselModule.forRoot(),
                  TabsModule.forRoot(),
                  YoutubePlayerModule ],
  declarations: [ AppComponent,
                  WelcomeComponent,
                  PdfViewerComponent,
                  UserComponent,
                  EggHuntComponent,
                  FeedbackComponent,
                  SurveyComponent,
                  VideoComponent,
                  WordsearchComponent],
  providers:    [ appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
