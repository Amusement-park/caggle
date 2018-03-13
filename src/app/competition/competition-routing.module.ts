import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionDetailComponent } from './detail/competition-detail.component'
import { CompetitionListComponent } from './list/competition-list.component'
import { CompetitionComponent } from './competition.component'

const routes: Routes = [
    {
        path: '', component: CompetitionComponent
    }
    ,
    { 
       path: 'list', component: CompetitionListComponent
       ,children: 
        [
            {
                path: '/competition/detail/:id',
                component: CompetitionDetailComponent
            }
            /*
            ,{
                path: 'edit/:detail-id',
                component: CompetitionDetailComponent
            }
            */
        ]
    },
    {
        path: 'detail/:id', component: CompetitionDetailComponent
        /*
        ,children:
        [
            {
                path: '/:id',
                component: CompetitionDetailComponent
            }
        ]
        */
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionRoutingModule {
}
