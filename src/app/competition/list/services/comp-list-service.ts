import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Competition } from '../domain/comp';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../../../environments/environment';

@Injectable()
export class CompetitionListService{
    
    // private local = 'assets/data/competition-list.json'
    private compsUrl = `${environment.api.zaggle}/competition`

    constructor(private http: HttpClient) {

    }
    
    getCompetitionList() {
        return this.http.get<any>(this.compsUrl)
            .toPromise()
            .then(res => <Competition[]> res) // res.data)
            .then(data => data);
    }
}
