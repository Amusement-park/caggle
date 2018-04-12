import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscussionComponent } from './list/component/discussion.component';

const routes: Routes = [
    {
        path: '', component: DiscussionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DiscussionRoutingModule {
}
