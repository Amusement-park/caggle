import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionOverviewComponent } from './competition-overview.component';

const routes: Routes = [
    {
        path: '', component: CompetitionOverviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionOverviewRoutingModule {
}
