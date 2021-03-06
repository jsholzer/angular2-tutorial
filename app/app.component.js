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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./heroes/hero.service');
var auth_service_1 = require("./auth.service");
var dialog_service_1 = require("./dialog.service");
var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Tour of Heroes';
    }
    Object.defineProperty(AppComponent.prototype, "isLoggedIn", {
        get: function () {
            return this.authService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [
                hero_service_1.HeroService,
                dialog_service_1.DialogService
            ],
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "<h1 class=\"title\">{{title}}</h1>\n<nav>\n    <a [routerLink]=\"['/crisis-center']\">Crisis Center</a>\n    <a [routerLink]=\"['/heroes']\">Heroes</a>\n    <a [routerLink]=\"['/login']\" *ngIf=\"!isLoggedIn\">Log In</a>\n    \n    <span *ngIf=\"isLoggedIn\">\n        <a [routerLink]=\"['/crisis-center/admin']\" *ngIf=\"isLoggedIn\">Crisis Admin</a>\n        <a (click)=\"logout()\" *ngIf=\"isLoggedIn\">Log Out</a>\n    </span>\n</nav>\n<router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map