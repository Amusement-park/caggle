import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { CompetitionDetailRoutingModule } from './competition-detail-routing.module';
import { CompetitionDetailComponent } from './competition-detail.component';
import { HeaderComponent } from './components/header/header.component';

import { OverviewComponent } from './components/overview/overview.component';
import { BlankPageComponent } from './components/blank-page/blank-page.component';
import { DataComponent} from './components/data/data.component';


@NgModule({
  imports: [
    CommonModule,
    CompetitionDetailRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [
    CompetitionDetailComponent, 
    HeaderComponent,
    BlankPageComponent,
    OverviewComponent,
    DataComponent
    ]

})
export class CompetitionDetailModule { }