import { Component, OnInit } from '@angular/core';
import { CompetitionServiceProvider } from './competition.service.provider'
import { CompetitionService } from './competition.service'
import { DBConfig, COMP_DB_CONFIG } from './competition.config'

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
     ,{ provide: DBConfig, useValue: COMP_DB_CONFIG }
     ,{ provide: 'isDev', useValue: true },
     CompetitionServiceProvider
  ]
})
export class CompetitionComponent implements OnInit {

  data: string;

  constructor(private competitionService: CompetitionService, public dbConfig: DBConfig) {
    // @Inject('myConfig') public myConfig: string
    // console.log(dbConfig);
    console.log(competitionService.getCompetition());
  }

  sayHi() {
    this.data = this.competitionService.loadData();
  }

  ngOnInit() {
  }
}
