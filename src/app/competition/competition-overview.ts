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