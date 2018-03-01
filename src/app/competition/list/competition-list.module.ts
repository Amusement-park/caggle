import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CompetitionListRoutingModule } from './competition-list-routing.module';
import { CompetitionListComponent } from './competition-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    CompetitionListRoutingModule,
    HttpClientModule
  ],
  declarations: [CompetitionListComponent]
})
export class CompetitionListModule { }
