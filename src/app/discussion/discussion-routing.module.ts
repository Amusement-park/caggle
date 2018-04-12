import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscussionListComponent } from './list/component/discussion-list.component';
import { DiscussionDetailComponent } from './detail/component/discussion-detail.component';

const routes: Routes = [
    { path: '', component: DiscussionListComponent},
    { path: ':id', component: DiscussionDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DiscussionRoutingModule {
}
