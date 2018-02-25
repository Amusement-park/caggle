import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { CompetitionDetailRoutingModule } from './competition-detail-routing.module';
import { CompetitionDetailComponent } from './competition-detail.component';

import {
    NavbarComponent,
    // TimepickerComponent
} from './components';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    CompetitionDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    PageHeaderModule
  ],
  declarations: [
    CompetitionDetailComponent
    ,NavbarComponent]

})
export class CompetitionDetailModule { }