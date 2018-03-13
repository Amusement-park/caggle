import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CompetitionListRoutingModule } from './competition-list-routing.module';
import { CompetitionListComponent } from './competition-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CompetitionService } from '../service/competition.service';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    CompetitionListRoutingModule,
    HttpClientModule
  ],
  declarations: [CompetitionListComponent],
  providers: [CompetitionService]
})
export class CompetitionListModule { }
