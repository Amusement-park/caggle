import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CompetitionRoutingModule } from './competition-routing.module';

import { CompetitionComponent } from './competition.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    CompetitionRoutingModule
  ],
  declarations: [CompetitionComponent]
})
export class CompetitionModule { }
