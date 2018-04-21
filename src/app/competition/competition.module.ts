import { NgModule }   from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { CompetitionListComponent }  from './list/competition-list.component';
import { CompetitionDetailComponent }  from './detail/competition-detail.component';
import { CompetitionService } from './service/competition.service';
import { DataService } from './detail/data.service'
import { CompetitionRoutingModule }  from './competition-routing.module';
import { OverviewComponent } from './detail/components/overview/overview.component';
import { DataComponent } from './detail/components/data/data.component';

import { DiscussionModule } from '../discussion/discussion.module';

@NgModule({
  imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        CompetitionRoutingModule,
        DiscussionModule,
  ], 
  declarations: [
        CompetitionListComponent,
        CompetitionDetailComponent,
        OverviewComponent,
        DataComponent,
  ],
  providers: [CompetitionService, DataService]
//   providers: [DataService]
})
export class CompetitionModule { }
