import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompetitionDetailRoutingModule } from './competition-detail-routing.module';
import { CompetitionDetailComponent } from './competition-detail.component';
import { HeaderComponent } from './components/header/header.component';

import { OverviewComponent } from './components/overview/overview.component';
import { DataComponent} from './components/data/data.component';
// import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule,
    CompetitionDetailRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot(),
  ],
  exports: [
    HeaderComponent, 
    OverviewComponent,
    DataComponent,
    ],
  declarations: [
    HeaderComponent,
    OverviewComponent,
    DataComponent,
    ],
  // providers: [DataService]
})
export class CompetitionDetailModule { }

// https://stackblitz.com/edit/passing-data-between-components-in-router-outlet-to-outside?file=app%2Fapp.routing.ts