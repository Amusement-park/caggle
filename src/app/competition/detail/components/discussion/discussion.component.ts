import { Component, OnInit } from '@angular/core';
import { CompetitionService, Config } from '../../../competition.service'
import { Competition } from '../../../competition'

@Component({
    selector: 'app-discussion',
    templateUrl: './discussion.component.html',
    providers: [
      // { provide: CompetitionService, useClass: CompetitionService }
     // ,{ provide: DBConfig, useValue: COMP_DB_CONFIG }
     ,{ provide: 'isDev', useValue: true },
     ,CompetitionService
    ],
    styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

    error: any;
    headers: string[];
    data: string;

    // dummy data
    competitions: Competition[] = [
        {headline: "Lee", description: "LEE"},
        {headline: "Lee2", description: "LEE2"},
        {headline: "Lee3", description: "LEE3"},
    ]

    constructor(private competitionService: CompetitionService) {
        if (this.competitionService) {
            console.log(competitionService.getCompetition());
            // <p> Mercari Price Suggestion Challenge <br> Can you automatically suggest product prices to online sellers? <br> featured   1 month ago tags </p></td>
            // <td> <p> $10,0000 <br> 2,1023 teams </p>
            // this.competitions = this.competitionService.getCompetition();
        }
        else {
            console.log('competition service is not implementation');
        }
    }

    sayHi() {
        // this.data = this.competitionService.loadData();
    }

    ngOnInit() {}
}
