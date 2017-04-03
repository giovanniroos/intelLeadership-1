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
var scheme_service_1 = require("../../services/scheme/scheme.service");
var SchemeListComponent = (function () {
    function SchemeListComponent(_schemeService, _routing) {
        var _this = this;
        this._schemeService = _schemeService;
        this._routing = _routing;
        _schemeService.getSchemeList().subscribe(function (response) {
            _this.schemes = response;
        });
    }
    SchemeListComponent.prototype.onSelect = function (id) {
        this._routing.navigate(['/members', id]);
    };
    return SchemeListComponent;
}());
SchemeListComponent = __decorate([
    core_1.Component({
        selector: 'schemeList',
        moduleId: module.id,
        templateUrl: 'schemeList.html',
        providers: [scheme_service_1.SchemeService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof scheme_service_1.SchemeService !== "undefined" && scheme_service_1.SchemeService) === "function" && _a || Object, router_1.Router])
], SchemeListComponent);
exports.SchemeListComponent = SchemeListComponent;
var _a;
//# sourceMappingURL=scheme.component.js.map