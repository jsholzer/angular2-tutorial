"use strict";
var auth_guard_1 = require("../auth.guard");
var interfaces_1 = require("../interfaces");
var crisis_admin_component_1 = require("./crisis-admin.component");
var crisis_center_component_1 = require("./crisis-center.component");
var crisis_detail_component_1 = require("./crisis-detail.component");
var crisis_list_component_1 = require("./crisis-list.component");
exports.CrisisCenterRoutes = [
    {
        path: '',
        redirectTo: '/crisis-center',
        terminal: true
    },
    {
        path: 'crisis-center',
        component: crisis_center_component_1.CrisisCenterComponent,
        children: [
            {
                path: 'admin',
                component: crisis_admin_component_1.CrisisAdminComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: ':id',
                component: crisis_detail_component_1.CrisisDetailComponent,
                canDeactivate: [interfaces_1.CanDeactivateGuard]
            },
            {
                path: '',
                component: crisis_list_component_1.CrisisListComponent
            }
        ]
    }
];
//# sourceMappingURL=crisis-center.routes.js.map