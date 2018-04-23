import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionRoutingModule } from './discussion-routing.module';

import { DiscussionListComponent } from './list/component/discussion-list.component';
import { DiscussionDetailComponent } from './detail/component/discussion-detail.component';
import { DiscussionService } from './service/discussion.service';
import { CommentService } from './service/comment.service';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';
import { DiscussionAddComponent } from './add/discussion-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    DiscussionRoutingModule,
    SharedPipesModule
  ],
  exports: [
    DiscussionListComponent
  ],
  declarations: [DiscussionListComponent, DiscussionDetailComponent, DiscussionAddComponent],
  providers: [DiscussionService, CommentService]
})
export class DiscussionModule { }
