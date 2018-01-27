import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CompetitionOverviewRoutingModule } from './competition-overview-routing.module';
import { CompetitionOverviewComponent } from './competition-overview.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    CompetitionOverviewRoutingModule
  ],
  declarations: [CompetitionOverviewComponent]
})
export class CompetitionOverviewModule { }
