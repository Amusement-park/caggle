import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { DiscussionComponent } from './discussion.component';

@NgModule({
     imports: [
        CommonModule,
        NgbModule
    ],
    declarations: [DiscussionComponent]
})
export class DiscussionModule {}
