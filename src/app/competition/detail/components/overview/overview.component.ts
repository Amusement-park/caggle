import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routerTransition } from '../../../../router.animations';
import { OverviewModule } from './overview.module'

@Component({
  selector: 'overview',
  // template: '<h1>Overview</h1>',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [routerTransition()]
})
export class OverviewComponent implements OnInit {

  public background: any;

  constructor() { 
    this.background =  
            {
              imagePath: 'assets/images/slider2.jpg',
              label: 'headline',
              text: 'description',
             };
  }

  ngOnInit() {
  }
}

