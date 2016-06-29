import { provideRouter, RouterConfig } from '@angular/router';

import { CrisisCenterRoutes } from "./crisis-center/crisis-center.routes";
import { HeroesRoutes } from "./heroes/heroes.routes";
import { CanDeactivateGuard } from "./interfaces";
import { LoginRoutes, AUTH_PROVIDERS } from "./login.routes";

export const routes : RouterConfig = [
    ...CrisisCenterRoutes,
    ...HeroesRoutes,
    ...LoginRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AUTH_PROVIDERS,
    CanDeactivateGuard
];
