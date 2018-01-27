import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CompetitionListRoutingModule } from './competition-list-routing.module';
import { CompetitionListComponent } from './competition-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    CompetitionListRoutingModule
  ],
  declarations: [CompetitionListComponent]
})
export class CompetitionListModule { }
