import { MockCompetitionService } from './mock-competition.service';
import { CompetitionService } from './competition.service';
import { HttpClient } from '@angular/common/http';

const competitionServiceFactory = (isDev: boolean) => {
  console.log(isDev);
  // return isDev ? new MockCompetitionService() : new CompetitionService(http: HttpClient);
};

export const CompetitionServiceProvider = {
  provide: CompetitionService,
  useFactory: competitionServiceFactory,
  deps: ['isDev']
};