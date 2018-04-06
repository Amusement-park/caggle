import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class DataService {
    subject = new Subject<any>();
    temp = [];
 
    sendData(message: any) {
        console.log('message', message);
        this.subject.next(message);
        this.temp.push(message);
    }
 
    clearData() {
        this.subject.next();
    }
 
    getData(): Observable<any> {
        console.log(this.subject);
        return this.subject.asObservable();
    }
}