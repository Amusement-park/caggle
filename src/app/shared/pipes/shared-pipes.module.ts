import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FromNowPipe } from './from-now.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FromNowPipe],
    exports: [FromNowPipe]
})
export class SharedPipesModule { }
