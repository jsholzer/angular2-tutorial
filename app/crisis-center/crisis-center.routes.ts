import { RouterConfig } from "@angular/router";

import { AuthGuard } from "../auth.guard";
import { CanDeactivateGuard } from "../interfaces";
import { CrisisAdminComponent } from "./crisis-admin.component";
import { CrisisCenterComponent } from "./crisis-center.component";
import { CrisisDetailComponent } from "./crisis-detail.component";
import { CrisisListComponent } from "./crisis-list.component";

export const CrisisCenterRoutes : RouterConfig = [
    {
        path: '',
        redirectTo: '/crisis-center',
        terminal: true
    },
    {
        path: 'crisis-center',
        component: CrisisCenterComponent,
        children: [
            {
                path: 'admin',
                component: CrisisAdminComponent,
                canActivate: [AuthGuard]
            },
            {
                path: ':id',
                component: CrisisDetailComponent,
                canDeactivate: [CanDeactivateGuard]
            },
            {
                path: '',
                component: CrisisListComponent
            }
        ]
    }
]
