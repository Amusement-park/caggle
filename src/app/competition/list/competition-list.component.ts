import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { CompetitionServiceProvider } from '../service/competition.service.provider'
import { CompetitionService, Config } from '../service/competition.service'
import { Competition } from '../competition'
import { HttpClient } from '@angular/common/http';
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
  template: '{{ competitionService.showConfigResponse() | json }}',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss'],
  providers: [
      // { provide: CompetitionService, useClass: CompetitionService }
     // ,{ provide: DBConfig, useValue: COMP_DB_CONFIG }
     ,{ provide: 'isDev', useValue: true },
     ,CompetitionService
  ],
  styles: ['.error {color: red;}']
})

export class CompetitionListComponent implements OnInit {
  error: any;
  headers: string[];
  config: Config;
  data: Object;
  comps$: Observable<Competition[]>;
  private selectedId: number;

  clear() {
    this.error = undefined;
    this.headers = undefined;
  }

  constructor(private competitionService: CompetitionService, 
              private http: HttpClient, 
              private route: ActivatedRoute ) {
    // @Inject('myConfig') public myConfig: string
    // console.log(dbConfig);
    if (this.competitionService) {
      // console.log(competitionService.getCompetition());
      // <p> Mercari Price Suggestion Challenge <br> Can you automatically suggest product prices to online sellers? <br> featured   1 month ago tags </p></td>
      // <td> <p> $10,0000 <br> 2,1023 teams </p>
      // this.competitions = this.competitionService.getCompetition();
    }
    else {
      console.log('competition service is not implementation');
    }
  }

  ngOnInit() {
    this.comps$ = this.route.paramMap.switchMap ((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.competitionService.getComps()
    });
    
    // this.loadData();
    /*
    this.http.get('http://210.89.178.101:9000/competition').subscribe(result => {
      console.log(result);
    });
    */
  }
 /*
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
  */
  loadData() {
    this.competitionService.loadData().subscribe(resp => {
      console.log(resp)
      this.data = resp;
    });
    // this.data = this.competitionService.loadData();
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