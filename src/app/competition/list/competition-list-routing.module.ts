import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionListComponent } from './competition-list.component';
// import { CompetitionDetailComponent } from '../detail/competition-detail.component';

const routes: Routes = [
        { path: '', component: CompetitionListComponent }
        // { path: 'detail/:id', redirectTo: '/detail/:id' },
        // { path: 'detail/:id', component: CompetitionDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionListRoutingModule {
}
