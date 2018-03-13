import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CompetitionComponent } from './competition.component';
import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionListComponent } from './list/competition-list.component';
import { CompetitionDetailComponent } from './detail/competition-detail.component';
import { CompetitionDetailRoutingModule } from './detail/competition-detail-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { CompetitionService } from './service/competition.service';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    HttpClientModule,
    CompetitionRoutingModule,
    CompetitionDetailRoutingModule
  ],

  declarations: [CompetitionComponent
      ,CompetitionListComponent
      ,CompetitionDetailComponent],

  providers: [CompetitionService]
})
export class CompetitionModule { }
