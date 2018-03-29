import { Component, NgModule, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routerTransition } from '../../../../router.animations';
import { Competition } from '../../../competition';

import { DataService } from '../../data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'overview',
  // template: '<h1>Overview</h1>',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [routerTransition()]
})
export class OverviewComponent implements OnInit {
  comp: Competition;
  public background: any;
  subscription: Subscription;

  constructor(private ds: DataService) { 
    this.background =  
            {
              imagePath: 'assets/images/slider2.jpg',
              label: 'headline',
              text: 'description',
             };
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.subscription = this.ds.getData().subscribe(x => {
      this.comp = x; 
      console.log(this.comp)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

