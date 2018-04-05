import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class DataService {
    private subject = new Subject<any>();
 
    sendData(message: any) {
        console.log('message', message);
        this.subject.next(message);
    }
 
    clearData() {
        this.subject.next();
    }
 
    getData(): Observable<any> {
        return this.subject.asObservable();
    }
}