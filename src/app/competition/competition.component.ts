import { Component, OnInit } from '@angular/core';
import { CompetitionService } from './competition.service'

@Component({
  selector: 'app-competition',
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ data }}</p>
  `,
  // templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
  providers: [
     { provide: CompetitionService, useClass: CompetitionService }
    // ,{ provide: DBConfig, useValue: COMP_DB_CONFIG }
  ]
})
export class CompetitionComponent implements OnInit {

  data: string;

  constructor(private competitionService: CompetitionService) {
    // @Inject('myConfig') public myConfig: string
    // console.log(dbConfig);
  }

  sayHi() {
    this.data = this.competitionService.loadData();
    this.data = 'gg';
  }

  ngOnInit() {
  }
}
