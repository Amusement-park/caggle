import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { NavbarRoutingModule } from './navbar-routing.module';
// import { NavbarComponent } from './navbar.component';
import { StatModule } from '../../../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StatModule
        // NavbarRoutingModule
    ],
    declarations: [
        // OverviewComponent
    ]
})
export class OverviewModule {}