import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { CompetitionComponent } from './competition.component';
import { CompetitionListComponent }  from './list/competition-list.component';
import { CompetitionDetailComponent }  from './detail/competition-detail.component';
import { CompetitionService } from './service/competition.service';
import { CompetitionRoutingModule }  from './competition-routing.module';

import { CompetitionDetailModule } from './detail/competition-detail.module';

@NgModule({
  imports: [     
        CommonModule,
		ReactiveFormsModule,
        CompetitionDetailModule,
        CompetitionRoutingModule,
  ], 
  declarations: [
        CompetitionComponent,
		CompetitionListComponent,
		CompetitionDetailComponent,
  ],
  providers: [ CompetitionService ]
})
export class CompetitionModule { }
