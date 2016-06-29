import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

import {Hero} from "../hero";
import {HeroService} from "./hero.service";

@Component({
    templateUrl: 'app/heroes/hero-detail.component.html',
    styleUrls: ['app/heroes/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy
{
    hero: Hero;

    private sub: any;

    constructor (private heroService : HeroService,
                 private route : ActivatedRoute,
                 private router : Router){}

    ngOnInit()
    {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    ngOnDestroy()
    {
        this.sub.unsubscribe();
    }

    save() {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack();
            })
            .catch(error => console.error(error));
    }


    goBack() {
        this.router.navigate(['/heroes']);
    }

}