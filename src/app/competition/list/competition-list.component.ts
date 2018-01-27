import { Component, OnInit, Inject, Optional } from '@angular/core';
import { CompetitionServiceProvider } from '../competition.service.provider'
import { CompetitionService } from '../competition.service'
import { Competition } from '../competition'
import { DBConfig, DB_CONFIG, DBConfigProvider } from '../competition.config'

@Component({
  selector: 'app-competition-list',
  // template: '{{ dbConfig | json }}',
  /*
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ data }}</p>
  `,
  */
  // template: '{{ competitionService.getCompetition() | json }}',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss'],
  providers: [
      // { provide: CompetitionService, useClass: CompetitionService }
     // ,{ provide: DBConfig, useValue: COMP_DB_CONFIG }
     ,{ provide: 'isDev', useValue: true },
     ,CompetitionServiceProvider
     ,DBConfigProvider
  ]
})
export class CompetitionListComponent implements OnInit {

  data: string;
  competitions: Competition[] = [
    {headline: "Lee", description: "LEE"},
    {headline: "Lee2", description: "LEE2"},
    {headline: "Lee3", description: "LEE3"},
  ]

  constructor(@Inject(DB_CONFIG) public dbConfig: DBConfig, @Optional() private competitionService: CompetitionService) {
    // @Inject('myConfig') public myConfig: string
    // console.log(dbConfig);
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
    this.data = this.competitionService.loadData();
  }

  ngOnInit() {
  }
}
