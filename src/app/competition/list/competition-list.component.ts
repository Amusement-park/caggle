import { Component, OnInit, Inject, Optional } from '@angular/core';
import { CompetitionServiceProvider } from '../competition.service.provider'
import { CompetitionService, Config } from '../competition.service'
import { Competition } from '../competition'
import { DBConfig, DB_CONFIG, DBConfigProvider } from '../competition.config'
// import { MessageService } from '../message.service';


@Component({
  selector: 'app-competition-list',
  // template: '{{ dbConfig | json }}',
  /*
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ data }}</p>
  `,
  */
  // template: '{{ competitionService.showConfigResponse() | json }}',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss'],
  providers: [
      // { provide: CompetitionService, useClass: CompetitionService }
     // ,{ provide: DBConfig, useValue: COMP_DB_CONFIG }
     ,{ provide: 'isDev', useValue: true },
     ,CompetitionServiceProvider
     ,CompetitionService
     ,DBConfigProvider
  ],
  styles: ['.error {color: red;}']
})

export class CompetitionListComponent implements OnInit {
  error: any;
  headers: string[];
  config: Config;
  data: string;

  // dummy data
  competitions: Competition[] = [
    {headline: "Lee", description: "LEE"},
    {headline: "Lee2", description: "LEE2"},
    {headline: "Lee3", description: "LEE3"},
  ]

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

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

  showConfig() {
    this.competitionService.getConfig()
      .subscribe(
        data => this.config = { ...data }, // success path
        error => this.error = error // error path
      );
      console.log(this.config);
  }

  showConfigResponse() {
    this.competitionService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
      });
  }

  makeError() {
    this.competitionService.makeIntentionalError().subscribe(null, error => this.error = error );
  }

  sayHi() {
    this.data = this.competitionService.loadData();
  }

  ngOnInit() {
    
  }
}
/*


  showConfig_v1() {
    this.competitionService.getConfig_1()
      .subscribe(data => this.config = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      });
  }

  showConfig_v2() {
    this.competitionService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe(data => this.config = { ...data });
  }
*/