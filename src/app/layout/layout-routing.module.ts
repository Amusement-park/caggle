import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            // { path: 'competition', loadChildren: '../competition/detail/competition-detail.module#CompetitionDetailModule' },
            // { path: 'competition', loadChildren: '../competition/detail/components/blank-page/blank-page.module#BlankPageModule' },
            // { path: 'competition', loadChildren: '../competition/list/competition-list.module#CompetitionListModule' },
            { path: 'competition', loadChildren: '../competition/competition.module#CompetitionModule' },
            { path: 'discussion', loadChildren: '../discussion/discussion.module#DiscussionModule' },
            { path: 'ranking', loadChildren: '../ranking/rank.module#RankModule' },

            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
