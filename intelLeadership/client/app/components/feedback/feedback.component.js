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
var feedback_service_1 = require("../../services/feedback/feedback.service");
var FeedbackComponent = (function () {
    function FeedbackComponent(fb, _feedbackService) {
        var _this = this;
        this.fb = fb;
        this._feedbackService = _feedbackService;
        this.escalationForm = this.fb.group({
            issue: new forms_1.FormControl('', [forms_1.Validators.required]),
            description: new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this._feedbackService.getAllFeedback()
            .subscribe(function (data) {
            _this.escalationList = data;
        });
    }
    FeedbackComponent.prototype.submitFeedback = function () {
        var _this = this;
        if (this.escalationForm.valid) {
            this.escalationObj = this.escalationForm.value;
            this.escalationObj.status = 'Open';
            this._feedbackService.saveFeedback(this.escalationObj)
                .subscribe(function (data) {
                _this._feedbackService.getAllFeedback()
                    .subscribe(function (data) {
                    _this.escalationList = data;
                });
            });
        }
        else {
            console.log('Invalid');
        }
    };
    return FeedbackComponent;
}());
FeedbackComponent = __decorate([
    core_1.Component({
        selector: 'feedback',
        moduleId: module.id,
        templateUrl: 'feedback.html',
        styleUrls: ['../../css/forms.css'],
        providers: [feedback_service_1.FeedbackService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, feedback_service_1.FeedbackService])
], FeedbackComponent);
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=feedback.component.js.map