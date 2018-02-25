import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const routes: Routes = [
    {
        path: '', 
        component: NavbarComponent,
        children: [
            // { path: '', redirectTo: 'dashboard' },
            { path: 'overview', loadChildren: '../overview/overview.module#OverviewModule' },
            // { path: 'competition', loadChildren: '../competition/list/competition-list.module#CompetitionListModule' },
            { path: 'data', loadChildren: '../discussion/discussion.module#DiscussionModule' },
            { path: 'discussion', loadChildren: '../ranking/ranking.module#RankingModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavbarRoutingModule {
}