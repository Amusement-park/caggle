import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionDetailComponent } from './detail/competition-detail.component'
import { CompetitionListComponent } from './list/competition-list.component'
import { CompetitionComponent } from './competition.component'

import { OverviewComponent } from './detail/components/overview/overview.component';
import { DataComponent} from './detail/components/data/data.component';


const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'detail/:competId', component: CompetitionDetailComponent,
      children: [
        { path: '', redirectTo: 'overview', pathMatch: 'full' },
        { path: 'overview', component: OverviewComponent },
        { path: 'data', component: DataComponent },
      ]},
    { path: 'list', component: CompetitionListComponent }
 ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionRoutingModule {
}
