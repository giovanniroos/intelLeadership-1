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
require("rxjs/add/operator/switchMap");
var user_service_1 = require("../../services/users/user.service");
var EggHuntComponent = (function () {
    function EggHuntComponent(_userService, fb) {
        this._userService = _userService;
        this.fb = fb;
        this.possibleBarCodes = [751, 998, 254, 155, 681, 132, 794, 986, 217, 798, 762, 297, 749, 242, 608, 887, 694, 237, 619, 580, 826, 509, 633, 73, 720, 947, 334, 868, 924, 509, 936, 947, 269, 845, 826, 19, 332, 96, 874];
        this.eggForm = this.fb.group({
            userSelected: new forms_1.FormControl(),
            barcode: new forms_1.FormControl(),
        });
        this.saved = false;
        this.cantSave = false;
        this.cheating = false;
        this.jasonLoggedIn = false;
        this.populateForm();
    }
    EggHuntComponent.prototype.ngOnInit = function () {
    };
    EggHuntComponent.prototype.populateForm = function () {
        var _this = this;
        this.eggForm = this.fb.group({
            userSelected: new forms_1.FormControl('', [forms_1.Validators.required]),
            barcode: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
        this._userService.getUserList().subscribe(function (response) {
            _this.users = response;
        });
    };
    EggHuntComponent.prototype.saveData = function () {
        var _this = this;
        if (this.eggForm.valid) {
            var validBarCode = false;
            this.userObject = this.eggForm.value;
            console.log(this.userObject.userSelected.userName);
            for (var _i = 0, _a = this.possibleBarCodes; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c == this.userObject.barcode) {
                    console.log('FOUND MATCH : ' + c);
                    validBarCode = true;
                    break;
                }
            }
            if (validBarCode) {
                this._userService.getOneUser(this.userObject.userSelected._id)
                    .subscribe(function (existingUser) {
                    if (existingUser.barCode == null) {
                        if (_this.userObject.userSelected.userName == "Jason") {
                            _this.jasonLoggedIn = true;
                            _this.saved = false;
                            _this.cantSave = false;
                            _this.cheating = false;
                        }
                        else {
                            _this._userService.saveUser(_this.userObject)
                                .subscribe(function (data) {
                                _this.saved = true;
                                _this.cantSave = false;
                                _this.cheating = false;
                                _this.jasonLoggedIn = false;
                            });
                        }
                    }
                    else {
                        _this.cantSave = true;
                        _this.saved = false;
                        _this.cheating = false;
                        _this.jasonLoggedIn = false;
                    }
                });
            }
            else {
                this.cheating = true;
                this.saved = false;
                this.cantSave = false;
                this.jasonLoggedIn = false;
            }
        }
    };
    return EggHuntComponent;
}());
EggHuntComponent = __decorate([
    core_1.Component({
        selector: 'eggHuntBlock',
        moduleId: module.id,
        templateUrl: 'eggHunt.html',
        providers: [user_service_1.UserService],
        styleUrls: ['../../css/forms.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, forms_1.FormBuilder])
], EggHuntComponent);
exports.EggHuntComponent = EggHuntComponent;
//# sourceMappingURL=egghunt.component.js.map