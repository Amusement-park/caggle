import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionDetailComponent } from './competition-detail.component';

import { OverviewComponent } from './components/overview/overview.component';
import { BlankPageComponent } from './components/blank-page/blank-page.component';
import { DataComponent} from './components/data/data.component';

export const routes : Routes = [
    {
        path: '', 
        component: CompetitionDetailComponent,
        children:[
            // { path: '', redirectTo: '/blank-page' },
            // { path: 'blank-page', component: '/components/blank-page/blank-page.module#BlankPageModule'}
            { path: 'blank-page', component: BlankPageComponent },
            { path: 'overview', component: OverviewComponent },
            { path: 'data', component: DataComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionDetailRoutingModule {
}