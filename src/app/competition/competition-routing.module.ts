import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionDetailComponent } from './detail/competition-detail.component'
import { CompetitionListComponent } from './list/competition-list.component'
import { CompetitionComponent } from './competition.component'

const routes: Routes = [
    {
        path: '', component: CompetitionComponent
        // ,children: [
            // { path: 'list', component: CompetitionListComponent }
        // ]
    },
    { path: 'detail/:id', component: CompetitionDetailComponent },
    { path: 'list', component: CompetitionListComponent 
       ,children: 
        [
            {
                path: 'edit/:detail-id',
                component: CompetitionDetailComponent
            }
        ]
    },
    /*
    {
        path: 'detail/:id', component: CompetitionDetailComponent
        ,children:
        [
            {
                path: '/:id',
                component: CompetitionDetailComponent
            }
        ]
    }
    */
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionRoutingModule {
}