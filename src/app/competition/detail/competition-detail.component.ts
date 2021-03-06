import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operator/filter';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { slideInDownAnimation } from './animations';
import { CompetitionService } from '../service/competition.service';
import { Competition } from '../competition';
import { DataService } from './data.service';

@Component({
  selector: 'competition-detail-layout',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.scss']
  ,animations: [ slideInDownAnimation ]
})

export class CompetitionDetailComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
  comp: Competition;
  public background: any;
  dataPassed: any;
  isShowAddDiscussionButton: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CompetitionService,
    private translate: TranslateService,
    private ds: DataService
  ) {
      this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.background = {
             imagePath: 'assets/images/slider2.jpg',
              label: 'headline',
              text: 'description',
             
        };

        this.router.events.subscribe(event => {
          if(event instanceof NavigationEnd && event.url.search('discussion') != -1) {
            this.isShowAddDiscussionButton = true;
          } else {
            this.isShowAddDiscussionButton = false;
          }
        });
  }

  ngOnDestory() {
    this.ds.clearData();
  }

  ngOnInit() {
    this.getComp();
    /*
    this.comp$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getComp(params.get('competId')));
    */
  }

  getComp(): void {
    const id = +this.route.snapshot.paramMap.get('competId');
    this.service.getComp(id).subscribe(comp => {
      this.comp = comp
    });
  }

  gotoCompetitions(comp: Competition) {
    let compId = comp? comp.competId: null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: compId, foo: 'foo' }]);
  }

  goToAddDiscussion(){
    const id = +this.route.snapshot.paramMap.get('competId');
    this.router.navigate([`/competition/detail/${id}/discussion/add`], { relativeTo: this.route });
  }
}