import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionRoutingModule } from './discussion-routing.module';

import { DiscussionListComponent } from './list/component/discussion-list.component';
import { DiscussionService } from './service/discussion.service';
import { DiscussionDetailComponent } from './detail/component/discussion-detail.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    DiscussionRoutingModule
  ],
  exports: [
    DiscussionListComponent
  ],
  declarations: [DiscussionListComponent, DiscussionDetailComponent],
  providers: [DiscussionService]
})
export class DiscussionModule { }
