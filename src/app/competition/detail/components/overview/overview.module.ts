import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../../../shared';
import { OverviewComponent } from './overview.component'

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        NgbTabset,
        ReactiveFormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StatModule
    ],
    declarations: [
        OverviewComponent
    ]
})
export class OverviewModule {}