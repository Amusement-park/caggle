import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionRoutingModule } from './discussion-routing.module';

import { DiscussionComponent } from './discussion.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    DiscussionRoutingModule
  ],
  declarations: [DiscussionComponent]
})
export class DiscussionModule { }
