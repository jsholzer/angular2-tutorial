import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';

@Component({
    template: `
    <ul class="items">
      <li *ngFor="let crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
})
export class CrisisListComponent implements OnInit, OnDestroy {
    crises : Crisis[];
    private selectedId : number;
    private sub : any;

    constructor(private service : CrisisService,
                private route : ActivatedRoute,
                private router : Router) {
    }

    isSelected(crisis : Crisis) {
        return crisis.id === this.selectedId;
    }

    ngOnInit() {
        this.sub = this.router.routerState.parent(this.route).params.subscribe(params => {
            this.selectedId = +params['id'];
            this.service.getCrises()
                .then(crises => this.crises = crises);
        });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    onSelect(crisis : Crisis) {
        // Navigate with Absolute link
        this.router.navigate(['/crisis-center', crisis.id]);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */