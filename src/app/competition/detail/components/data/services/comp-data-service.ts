import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CompetitionData } from '../domain/comp-data';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompetitionDataService {
    
    constructor(private http: HttpClient) {}
    
    getCompetitionData() {
        return this.http.get<any>('assets/data/competition-data.json')
            .toPromise()
            .then(res => <CompetitionData> res.data)
            .then(data => data);
    }
}
