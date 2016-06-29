"use strict";
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    { provide: http_2.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
    { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService },
    app_routes_1.APP_ROUTER_PROVIDERS
]);
//# sourceMappingURL=main.js.map