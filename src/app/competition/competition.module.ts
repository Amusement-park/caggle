import { NgModule }   from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { CompetitionComponent } from './competition.component';
import { CompetitionListComponent }  from './list/competition-list.component';
import { CompetitionDetailComponent }  from './detail/competition-detail.component';
import { CompetitionService } from './service/competition.service';
import { DataService } from './detail/data.service'
import { CompetitionRoutingModule }  from './competition-routing.module';
import { OverviewComponent } from './detail/components/overview/overview.component';
import { DataComponent } from './detail/components/data/data.component';

// import { CompetitionDetailModule } from './detail/competition-detail.module';

@NgModule({
  imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
      //   CompetitionDetailModule,
        CompetitionRoutingModule,
  ], 
  declarations: [
        CompetitionComponent,
        CompetitionListComponent,
        CompetitionDetailComponent,
        OverviewComponent,
        DataComponent,
  ],
  providers: [CompetitionService, DataService]
//   providers: [DataService]
})
export class CompetitionModule { }
