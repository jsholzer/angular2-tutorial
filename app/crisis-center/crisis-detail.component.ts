import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';
import { Observable }                   from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { Crisis, CrisisService } from './crisis.service';
import { DialogService } from '../dialog.service';
import { CanComponentDeactivate } from "../interfaces";

@Component({
    template: `
  <div *ngIf="crisis">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
  `,
    styles: ['input {width: 20em}']
})
export class CrisisDetailComponent implements OnInit, OnDestroy, CanComponentDeactivate {
    crisis : Crisis;
    editName : string;
    private sub : any;

    constructor(private service : CrisisService,
                private router : Router,
                private route : ActivatedRoute,
                private dialogService : DialogService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];

            this.service.getCrisis(id)
                .then(crisis => {
                    if (crisis) {
                        this.editName = crisis.name;
                        this.crisis = crisis;
                    } else { // id not found
                        this.gotoCrises();
                    }
                });
        });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    cancel() {
        this.gotoCrises();
    }

    canDeactivate() : Observable<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        let p = this.dialogService.confirm('Discard changes?');
        let o = Observable.fromPromise(p);
        return o;
    }

    gotoCrises() {
        let crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['/crisis-center', { id: crisisId }]);
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }
}
