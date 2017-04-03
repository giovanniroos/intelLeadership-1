"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var app_routing_1 = require("./app.routing");
var angular2_highcharts_1 = require("angular2-highcharts");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ng2_pdf_viewer_1 = require("ng2-pdf-viewer");
var ng2_bootstrap_2 = require("ng2-bootstrap");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./components/welcome/welcome.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.routing,
            forms_1.ReactiveFormsModule,
            material_1.MaterialModule.forRoot(),
            angular2_highcharts_1.ChartModule,
            ng2_bootstrap_1.AlertModule.forRoot(),
            ng2_bootstrap_1.CollapseModule.forRoot(),
            ng2_bootstrap_1.AccordionModule.forRoot(),
            ng2_bootstrap_1.RatingModule.forRoot(),
            ng2_bootstrap_1.ModalModule.forRoot(),
            ng2_bootstrap_1.CarouselModule.forRoot(),
            ng2_bootstrap_2.TabsModule.forRoot()],
        declarations: [app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            ng2_pdf_viewer_1.PdfViewerComponent],
        providers: [app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map