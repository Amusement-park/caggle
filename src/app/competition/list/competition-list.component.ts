import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit, Inject, Optional } from '@angular/core';
// import { CompetitionServiceProvider } from '../service/competition.service.provider'
// import { CompetitionService } from '../service/competition.service'
// import { Competition } from '../competition'
import { HttpClient } from '@angular/common/http';
import { Competition } from './domain/comp';
import { CompetitionListService } from './services/comp-list-service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-competition-list',
  // template: '{{ comps.__zone_symbol__value | json }}',
  templateUrl: './competition-list.component.html',
  // styleUrls: ['./competition-list.component.scss'],
  providers: [ CompetitionListService ],
  styles: ['.error {color: red;}']
})

export class CompetitionListComponent implements OnInit {
  error: any;
  headers: string[];
  data: Object;
  comps: Competition[];
  private selectedId: number;

  clear() {
    this.error = undefined;
    this.headers = undefined;
  }

  constructor(//private competitionService: CompetitionService, 
              private compListService: CompetitionListService,
              private http: HttpClient, 
              private route: ActivatedRoute,
              private router: Router
            ) {
  }
  ngOnInit() {
    this.compListService.getCompetitionList().then(data => this.comps = data);
  }
  /* 
  ngOnInit() {
    this.getComps();
  }

  getComps(): void {
    // this.http.get('http://210.89.178.101:9000/competition').subscribe(data => { this.comps=data});
    // this.comps = this.competitionService.getComps();
    this.competitionService.getComps().subscribe(
      comps =>  {
        this.comps = comps
      });
  }
  */

  loadData() {
    /*
    this.competitionService.loadData().subscribe(resp => {
      console.log(resp)
      this.data = resp;
    });
    */
    // this.data = this.competitionService.loadData();
  }

  goToDetail(competId){
    this.router.navigate([`/competition/detail/${competId}`], { relativeTo: this.route });
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