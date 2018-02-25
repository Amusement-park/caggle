import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionListComponent } from './competition-list.component';

const routes: Routes = [
    {
        path: '', component: CompetitionListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionListRoutingModule {
}