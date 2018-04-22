import { Component, OnInit, Input} from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Competition } from '../../../competition';

@Component({
  selector: 'navbar',
  // template: '{{ sliders | json }}',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  animations: [routerTransition()]
})
export class DataComponent implements OnInit {

  @Input() comp: Competition;
  public background: any;

  constructor() { 
    this.background =  
            {
              imagePath: 'assets/images/slider2.jpg',
              label: 'headline',
              text: 'description',
             };
  }

  ngOnInit() {
  }
}
