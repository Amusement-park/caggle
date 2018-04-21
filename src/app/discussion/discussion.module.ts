import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionRoutingModule } from './discussion-routing.module';

import { DiscussionListComponent } from './list/component/discussion-list.component';
import { DiscussionDetailComponent } from './detail/component/discussion-detail.component';
import { DiscussionService } from './service/discussion.service';
import { CommentService } from './service/comment.service';


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
  providers: [DiscussionService, CommentService]
})
export class DiscussionModule { }
