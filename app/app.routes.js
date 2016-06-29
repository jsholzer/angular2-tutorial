"use strict";
var router_1 = require('@angular/router');
var crisis_center_routes_1 = require("./crisis-center/crisis-center.routes");
var heroes_routes_1 = require("./heroes/heroes.routes");
var interfaces_1 = require("./interfaces");
var login_routes_1 = require("./login.routes");
exports.routes = crisis_center_routes_1.CrisisCenterRoutes.concat(heroes_routes_1.HeroesRoutes, login_routes_1.LoginRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    login_routes_1.AUTH_PROVIDERS,
    interfaces_1.CanDeactivateGuard
];
//# sourceMappingURL=app.routes.js.map