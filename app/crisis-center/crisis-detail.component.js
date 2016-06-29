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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/fromPromise');
var crisis_service_1 = require('./crisis.service');
var dialog_service_1 = require('../dialog.service');
var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(service, router, route, dialogService) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.dialogService = dialogService;
    }
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.service.getCrisis(id)
                .then(function (crisis) {
                if (crisis) {
                    _this.editName = crisis.name;
                    _this.crisis = crisis;
                }
                else {
                    _this.gotoCrises();
                }
            });
        });
    };
    CrisisDetailComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        var p = this.dialogService.confirm('Discard changes?');
        var o = Observable_1.Observable.fromPromise(p);
        return o;
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        var crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['/crisis-center', { id: crisisId }]);
    };
    CrisisDetailComponent.prototype.save = function () {
        this.crisis.name = this.editName;
        this.gotoCrises();
    };
    CrisisDetailComponent = __decorate([
        core_1.Component({
            template: "\n  <div *ngIf=\"crisis\">\n    <h3>\"{{editName}}\"</h3>\n    <div>\n      <label>Id: </label>{{crisis.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"editName\" placeholder=\"name\"/>\n    </div>\n    <p>\n      <button (click)=\"save()\">Save</button>\n      <button (click)=\"cancel()\">Cancel</button>\n    </p>\n  </div>\n  ",
            styles: ['input {width: 20em}']
        }), 
        __metadata('design:paramtypes', [crisis_service_1.CrisisService, router_1.Router, router_1.ActivatedRoute, dialog_service_1.DialogService])
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
}());
exports.CrisisDetailComponent = CrisisDetailComponent;
//# sourceMappingURL=crisis-detail.component.js.map