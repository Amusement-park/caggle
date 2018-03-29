import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition',
  template: `<router-outlet></router-outlet> 
  <h1> competition component </h1>`
})
export class CompetitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}