import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionDetailComponent } from './competition-detail.component';

import { OverviewComponent } from './components/overview/overview.component';
import { DataComponent} from './components/data/data.component';

export const routes : Routes = [
    { path: '', component:CompetitionDetailComponent,
    children: [
        // { path: '', redirectTo: 'detail/:competId/overview', pathMatch: 'full' },
        // { path: 'detail/:competId/overview', component: OverviewComponent },
        // { path: 'detail/:competId/data', component: DataComponent },
    ]}
    // { path: 'comp-discussion', component: CompDiscussionComponent }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionDetailRoutingModule {
}