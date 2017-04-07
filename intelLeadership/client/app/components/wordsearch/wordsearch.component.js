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
var user_service_1 = require("../../services/users/user.service");
var WordsearchComponent = (function () {
    function WordsearchComponent(_userService, fb) {
        this._userService = _userService;
        this.fb = fb;
        this.populateForm();
    }
    WordsearchComponent.prototype.ngOnInit = function () {
        this.populateForm();
    };
    WordsearchComponent.prototype.populateForm = function () {
        var _this = this;
        this.wordForm = this.fb.group({
            userSelected: new forms_1.FormControl('', [forms_1.Validators.required]),
            word1: new forms_1.FormControl('', [forms_1.Validators.required]),
            word2: new forms_1.FormControl('', [forms_1.Validators.required]),
            word3: new forms_1.FormControl('', [forms_1.Validators.required]),
            word4: new forms_1.FormControl('', [forms_1.Validators.required]),
            word5: new forms_1.FormControl('', [forms_1.Validators.required]),
            word6: new forms_1.FormControl('', [forms_1.Validators.required]),
            word7: new forms_1.FormControl('', [forms_1.Validators.required]),
            word8: new forms_1.FormControl('', [forms_1.Validators.required]),
            word9: new forms_1.FormControl('', [forms_1.Validators.required]),
            word10: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
        this._userService.getUserList().subscribe(function (response) {
            _this.users = response;
        });
    };
    return WordsearchComponent;
}());
WordsearchComponent = __decorate([
    core_1.Component({
        selector: 'wordsearch',
        moduleId: module.id,
        templateUrl: 'wordsearch.html',
        providers: [user_service_1.UserService],
        styleUrls: ['../../css/forms.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, forms_1.FormBuilder])
], WordsearchComponent);
exports.WordsearchComponent = WordsearchComponent;
//# sourceMappingURL=wordsearch.component.js.map