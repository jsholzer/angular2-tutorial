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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var crisis_service_1 = require("./crisis.service");
var CrisisCenterComponent = (function () {
    function CrisisCenterComponent() {
    }
    CrisisCenterComponent = __decorate([
        core_1.Component({
            template: "<h2>CRISIS CENTER</h2>\n<router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [crisis_service_1.CrisisService],
        }), 
        __metadata('design:paramtypes', [])
    ], CrisisCenterComponent);
    return CrisisCenterComponent;
}());
exports.CrisisCenterComponent = CrisisCenterComponent;
//# sourceMappingURL=crisis-center.component.js.map