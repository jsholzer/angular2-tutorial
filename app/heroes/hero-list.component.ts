import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from '../hero'
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: "app/heroes/hero-list.component.html",
    styleUrls: ['app/heroes/hero-list.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    addingHero: boolean = false;
    error : any;

    constructor(private heroService: HeroService, private router: Router) { }

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.router.navigate(['/hero', hero.id]);
    }

    onDelete(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

}
