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

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

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
                  TabsModule.forRoot()],
  declarations: [ AppComponent,
                  WelcomeComponent,
                  PdfViewerComponent],
  providers:    [ appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
