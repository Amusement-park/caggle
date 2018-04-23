import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Competition } from '../domain/comp';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompetitionListService{
    
    private compsUrl = 'http://210.89.178.101:9000/competition' 
    private local = 'assets/data/competition-list.json'
    constructor(private http: HttpClient) {}
    
    getCompetitionList() {
        return this.http.get<any>(this.compsUrl)
            .toPromise()
            .then(res => <Competition[]> res) // res.data)
            .then(data => data);
    }
}
