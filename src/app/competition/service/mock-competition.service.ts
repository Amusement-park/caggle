import { Injectable } from '@angular/core';
import { Competition } from '../competition';

@Injectable()
export class MockCompetitionService {
  getCompetition(): Competition { return new Competition(1, 'headline', 'description'); }
}