import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionDetailComponent } from './detail/competition-detail.component'
import { CompetitionListComponent } from './list/competition-list.component'

import { OverviewComponent } from './detail/components/overview/overview.component';
import { DataComponent} from './detail/components/data/data.component';
import { CodeComponent} from './detail/components/code/code.component';
import { DiscussionListComponent } from '../discussion/list/component/discussion-list.component';
import { DiscussionDetailComponent } from '../discussion/detail/component/discussion-detail.component';

const routes: Routes = [
    { path: '', component: CompetitionListComponent },
    { path: 'detail/:competId', component: CompetitionDetailComponent,
      children: [
        { path: '', redirectTo: 'overview', pathMatch: 'full' },
        { path: 'overview', component: OverviewComponent},
        { path: 'data', component: DataComponent },
        { path: 'code', component: CodeComponent },
        { path: 'discussion', component: DiscussionListComponent },
        { path: 'discussion/:discusId', component: DiscussionDetailComponent },
      ]},
 ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionRoutingModule {
}


/*
const routes: Routes = [
    { path: '', component: CompetitionComponent,
        children: [
        { path: '', redirectTo:'list', pathMatch: 'full'},
       ,{ path: 'list', component: CompetitionListComponent }
       ,{ path: 'detail/:competId', component: CompetitionDetailComponent,
            children: [
                { path: '', redirectTo: 'overview', pathMatch: 'full' },
                { path: 'overview', component: OverviewComponent },
                { path: 'data', component: DataComponent },
            ]},

        ]}
];
*/