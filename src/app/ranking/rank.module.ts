import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { RankRoutingModule } from './rank-routing.module';
import { RankComponent } from './rank.component';

@NgModule({
    imports: [
        CommonModule, 
        Ng2Charts, 
        RankRoutingModule ],
    declarations: [RankComponent]
})
export class RankModule {}
