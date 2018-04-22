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
import { CodeComponent } from './detail/components/code/code.component';

import { DiscussionModule } from '../discussion/discussion.module';

// PrimeNG
import { FormsModule } from '@angular/forms';
import { InputTextModule }  from 'primeng/inputtext';
import { ButtonModule }  from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { DialogModule }  from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { CodeHighlighterModule } from 'primeng/codehighlighter';


@NgModule({
  imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        CompetitionRoutingModule,
        DiscussionModule,

        FormsModule,
        TableModule,
        InputTextModule,
        DialogModule,
        ProgressBarModule,
        ButtonModule,
        CodeHighlighterModule
  ], 
  declarations: [
        CompetitionListComponent,
        CompetitionDetailComponent,
        OverviewComponent,
        DataComponent,
        CodeComponent,
  ],
  providers: [CompetitionService, DataService]
//   providers: [DataService]
})
export class CompetitionModule { }
