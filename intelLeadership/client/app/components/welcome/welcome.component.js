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
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var user_service_1 = require("../../services/users/user.service");
var ng2_bootstrap_2 = require("ng2-bootstrap");
var WelcomeComponent = (function () {
    function WelcomeComponent(_userService, _routing) {
        this._userService = _userService;
        this._routing = _routing;
    }
    WelcomeComponent.prototype.openUserModal = function () {
        var _this = this;
        this._userService.getUserList().subscribe(function (response) {
            _this.users = response;
        });
        this.lgModal.show();
    };
    WelcomeComponent.prototype.redirectToSurvey = function () {
    };
    WelcomeComponent.prototype.redirectToEscalationsForm = function () {
        this._routing.navigate(['/feedback']);
    };
    return WelcomeComponent;
}());
__decorate([
    core_1.ViewChild('staticTabs'),
    __metadata("design:type", ng2_bootstrap_2.TabsetComponent)
], WelcomeComponent.prototype, "staticTabs", void 0);
__decorate([
    core_1.ViewChild('lgModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], WelcomeComponent.prototype, "lgModal", void 0);
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'welcomePage',
        moduleId: module.id,
        templateUrl: 'welcome.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map