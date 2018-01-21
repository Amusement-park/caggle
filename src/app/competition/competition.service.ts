import { Injectable } from '@angular/core';
import { Competition } from './competition';

@Injectable()
export class CompetitionService {

  constructor() { }
  loadData() { return  'Hi';}

  getCompetition(): Competition { return new Competition('real value', '123'); }
}