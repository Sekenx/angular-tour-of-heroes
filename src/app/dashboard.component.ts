import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit{

  // Define
  heroes: Hero[] = [];

  // Inject
  constructor(private heroService: HeroService) {}

  // Call when requested, dislay 4 heroes
  ngOnInit(): void {
    this.heroService.getHeroes()
    .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}