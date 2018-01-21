import { Component, OnInit, Inject, Optional } from '@angular/core';
import { CompetitionServiceProvider } from './competition.service.provider'
import { CompetitionService } from './competition.service'
import { DBConfig, DB_CONFIG, DBConfigProvider } from './competition.config'

@Component({
  selector: 'app-competition',
  // template: '{{ dbConfig | json }}',
  /*
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ data }}</p>
  `,
  */
  template: '{{ competitionService.getCompetition() | json }}',
  // templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
  providers: [
      // { provide: CompetitionService, useClass: CompetitionService }
     // ,{ provide: DBConfig, useValue: COMP_DB_CONFIG }
     ,{ provide: 'isDev', useValue: true },
     ,CompetitionServiceProvider
     ,DBConfigProvider
  ]
})
export class CompetitionComponent implements OnInit {

  data: string;
  competitions: string;

  constructor(@Inject(DB_CONFIG) public dbConfig: DBConfig, @Optional() private competitionService: CompetitionService) {
    // @Inject('myConfig') public myConfig: string
    // console.log(dbConfig);
    if (this.competitionService) {
      console.log(competitionService.getCompetition());
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
