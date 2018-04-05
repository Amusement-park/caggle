import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionRoutingModule } from './discussion-routing.module';

import { DiscussionComponent } from './component/discussion.component';
import { DiscussionService } from './service/discussion.service';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    DiscussionRoutingModule
  ],
  declarations: [DiscussionComponent],
  providers: [DiscussionService]
})
export class DiscussionModule { }
