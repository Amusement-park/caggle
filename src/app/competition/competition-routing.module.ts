import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionDetailComponent } from './detail/competition-detail.component'
import { CompetitionListComponent } from './list/competition-list.component'
import { CompetitionComponent } from './competition.component'

const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'detail/:competId', component: CompetitionDetailComponent },
    { path: 'list', component: CompetitionListComponent }
 ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionRoutingModule {
}
