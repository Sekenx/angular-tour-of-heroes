import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//Provide data and shares hero information
@Injectable()
export class HeroService {
  // Allow heroes to be retrieved from anywhere i.e. Cloud, local storage
  // Promise to call back when results are processed
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
