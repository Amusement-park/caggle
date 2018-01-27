import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'navbar',
  // template: '{{ sliders | json }}',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [routerTransition()]
})
export class NavbarComponent implements OnInit {

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