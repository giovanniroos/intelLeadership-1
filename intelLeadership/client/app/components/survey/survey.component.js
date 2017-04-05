"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var survey_service_1 = require("../../services/survey/survey.service");
var SurveyComponent = (function () {
    function SurveyComponent(fb, _surveyService) {
        this.fb = fb;
        this._surveyService = _surveyService;
        this.saved = false;
        this.populateForm();
    }
    SurveyComponent.prototype.ngOnInit = function () {
        this.populateForm();
    };
    SurveyComponent.prototype.populateForm = function () {
        this.surveyForm = this.fb.group({
            experienceRating: new forms_1.FormControl(''),
            conceptRating: new forms_1.FormControl(''),
            goodJobRating: new forms_1.FormControl(''),
            comments: new forms_1.FormControl('')
        });
    };
    SurveyComponent.prototype.saveSurvey = function () {
        var _this = this;
        if (this.surveyForm.valid) {
            this.surveyObj = this.surveyForm.value;
            this._surveyService.saveSurvey(this.surveyObj)
                .subscribe(function (data) {
                _this.saved = true;
            });
        }
        else {
            console.log('Invalid');
        }
    };
    return SurveyComponent;
}());
SurveyComponent = __decorate([
    core_1.Component({
        selector: 'surveycomp',
        moduleId: module.id,
        templateUrl: 'survey.html',
        providers: [survey_service_1.SurveyService],
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, survey_service_1.SurveyService])
], SurveyComponent);
exports.SurveyComponent = SurveyComponent;
//# sourceMappingURL=survey.component.js.map