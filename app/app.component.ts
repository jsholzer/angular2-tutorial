import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from './heroes/hero.service';
import { AuthService } from "./auth.service";
import { DialogService } from "./dialog.service";

@Component({
    selector: 'my-app',
    providers: [
        HeroService,
        DialogService
    ],
    directives: [ROUTER_DIRECTIVES],
    template: `<h1 class="title">{{title}}</h1>
<nav>
    <a [routerLink]="['/crisis-center']">Crisis Center</a>
    <a [routerLink]="['/heroes']">Heroes</a>
    <a [routerLink]="['/login']" *ngIf="!isLoggedIn">Log In</a>
    
    <span *ngIf="isLoggedIn">
        <a [routerLink]="['/crisis-center/admin']" *ngIf="isLoggedIn">Crisis Admin</a>
        <a (click)="logout()" *ngIf="isLoggedIn">Log Out</a>
    </span>
</nav>
<router-outlet></router-outlet>
    `
})
export class AppComponent {
    constructor(private authService : AuthService) {
    }

    get isLoggedIn() : boolean {
        return this.authService.isLoggedIn;
    }
    title = 'Tour of Heroes';
}