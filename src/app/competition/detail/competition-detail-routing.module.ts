import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionDetailComponent } from './competition-detail.component';

const routes: Routes = [
    {
        path: '', component: CompetitionDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionDetailRoutingModule {
}
