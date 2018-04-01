export class CompetitionOverview{
  constructor(public competitionOverviewId: number 
              ,public competitionId: number
              ,public description: string
              ,public evaluation: string
              ,public prizes: string
              ,public kernelsFaq: string
              ,public timeline: string
              ,public regiDate: string
             ) {}
}


/*
{
  "competitionOverviewId": 1,
  "competitionId": 1,
  "description": "description1",
  "evaluation": "evaluation1",
  "prizes": "prizes1",
  "kernelsFaq": "kernels_faq1",
  "timeline": "timeline1",
  "regiDate": "2018-03-28T00:00:00"
}
*/