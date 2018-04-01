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
    console.log('ngOnInit');
    /*
    this.subscription = this.route
      .data
      .subscribe(v => console.log(v));
     */

    this.subscription = this.ds.getData().subscribe(x => {
      this.competId = x; 
      console.log('overview ocmponent', this.competId)
      this.getCompOverview();
    });
  }

  getCompOverview(): void {
    console.log('GetCompOverview');
    const id = +this.competId;
    this.service.getOverview(id).subscribe(overview => 
      //  console.log(overview)
      this.overview = overview
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


