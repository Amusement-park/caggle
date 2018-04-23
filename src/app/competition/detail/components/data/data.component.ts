import { Component, OnInit, Input} from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Competition } from '../../../competition';
import { CompetitionData } from './domain/comp-data';
import { CompetitionDataService } from './services/comp-data-service';

@Component({
  selector: 'navbar',
  // template: '{{ sliders | json }}',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  animations: [routerTransition()],
  providers: [CompetitionDataService]
})

export class DataComponent implements OnInit {

  displayDialog: boolean;
  data: CompetitionData;
  
  constructor(
    private compService: CompetitionDataService, 
    ) {
  }

  handleClick() {
    console.log('button clcik');
    //execute action
  }
  
  ngOnInit() {
      this.compService.getCompetitionData().then(data => this.data = data);
  }
}

export class PrimeData implements CompetitionData{
  
  constructor(public title?, public desc?, public path?) {}
}

