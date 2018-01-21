import { Injectable } from '@angular/core';
import { Competition } from './competition';

@Injectable()
export class MockCompetitionService {
  getCompetition(): Competition { return new Competition('headline', 'description'); }
}