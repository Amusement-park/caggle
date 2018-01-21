import { MockCompetitionService } from './mock-competition.service';
import { CompetitionService } from './competition.service';

const competitionServiceFactory = (isDev: boolean) => {
  console.log(isDev);
  return isDev ? new MockCompetitionService() : new CompetitionService();
};

export const CompetitionServiceProvider = {
  provide: CompetitionService,
  useFactory: competitionServiceFactory,
  deps: ['isDev']
};