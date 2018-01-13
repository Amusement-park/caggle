import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RankingRoutingModule } from './ranking-routing.module';

import { RankingComponent } from './ranking.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    RankingRoutingModule
  ],
  declarations: [RankingComponent]
})
export class RankingModule { }
