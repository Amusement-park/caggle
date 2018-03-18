import { Component, OnInit } from '@angular/core';
import { Competition } from '../../../competition'

@Component({
    selector: 'app-discussion',
    template: 'overview',
    // templateUrl: './header.component.html',
    // templateUrl: './discussion.component.html',
    providers: [
      // { provide: CompetitionService, useClass: CompetitionService }
     // ,{ provide: DBConfig, useValue: COMP_DB_CONFIG }
     ,{ provide: 'isDev', useValue: true }
    ],
    styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

    constructor() {
    }

    sayHi() {
        // this.data = this.competitionService.loadData();
    }

    ngOnInit() {}
}
