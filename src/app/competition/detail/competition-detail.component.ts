import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { slideInDownAnimation } from './animations';
import { CompetitionService } from '../service/competition.service';
import { Competition } from '../competition';

@Component({
  template: `<h2> detail {{ comp }} </h2> 
    <div *ngIf="comp$ | async as comp">
    <h3>"{{ comp.id}}"</h3>
    <div>
  `
  /*
  <h2>HEROES</h2>
  <div *ngIf="hero$ | async as hero">
    <h3>"{{ hero.name }}"</h3>
    <div>
      <label>Id: </label>{{ hero.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoHeroes(hero)">Back</button>
    </p>
  </div>
  `
  */
  // ,animations: [ slideInDownAnimation ]
})
/*
@Component({
  selector: 'competition-detail-layout',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.scss']
})
*/

export class CompetitionDetailComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  comp$: Observable<Competition>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CompetitionService
  ) {}

  ngOnInit() {
    this.comp$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getComp(params.get('id')));
  }

  gotoCompetitions(comp: Competition) {
    let compId= comp? comp.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: compId, foo: 'foo' }]);
  }
}
