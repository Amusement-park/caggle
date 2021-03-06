import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, NavigationEnd } from '@angular/router';

import * as moment from 'moment';

import { Discussion, DiscussionService }  from '../../service/discussion.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})
export class DiscussionListComponent implements OnInit {

  discussions: Discussion[] = []
  isInContainer: boolean = false;

  ngOnInit() {
  }

  constructor(public discussionService: DiscussionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const competId = +this.route.parent.snapshot.paramMap.get('competId');

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd && event.url.search('competition') == -1) {
        this.isInContainer = true;
      } else {
        this.isInContainer = false;
      }
    });
    
    // Value 0 is in header
    if(competId == 0) {
      this.discussionService.get().subscribe(
        data => {
          this.discussions = data;
        }
      )
    } else {
      this.discussionService.getByCompetitionId(competId).subscribe(
        data => {
          this.discussions = data;
        }
      )
    }
  }

  goToDetail(discus){
    const { competId, discusId } = discus
    this.router.navigate([`/competition/detail/${competId}/discussion/${discusId}`], { relativeTo: this.route });
  }
}
