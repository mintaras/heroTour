import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.scss']
})
export class HereosComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(result => this.heroes = result);
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

}
