import { Component, NgModule, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routerTransition } from '../../../../router.animations';
import { Competition } from '../../../competition';
import { CompetitionOverview } from '../../../competition-overview';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs/Subscription';
import { CompetitionService } from '../../../service/competition.service';

@Component({
  selector: 'overview',
  // template: '<h1>Overview</h1>',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [routerTransition()]
})
export class OverviewComponent implements OnInit {
  competId: number;
  overview: CompetitionOverview;
  public background: any;
  subscription: Subscription;

  constructor(private ds: DataService
              ,private service: CompetitionService
              ,private route: ActivatedRoute
              ) 
  { 
    this.background =  
            {
              imagePath: 'assets/images/slider2.jpg',
              label: 'headline',
              text: 'description',
             };
  }

  ngOnInit() {
    this.competId = +this.route.parent.snapshot.paramMap.get('competId');
    this.service.getOverview(this.competId).subscribe(overview => 
      this.overview = overview
    );
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}


