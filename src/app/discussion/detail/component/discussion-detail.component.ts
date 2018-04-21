import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import * as moment from 'moment';

import { Discussion, DiscussionService }  from '../../service/discussion.service';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.scss']
})
export class DiscussionDetailComponent implements OnInit {

  discussion: Discussion

  ngOnInit() {
  }

  constructor(public discussionService: DiscussionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const discusId = +this.route.snapshot.paramMap.get('discusId');
    this.discussionService.getById(discusId)
      .subscribe(
        data => {
          this.discussion = data;
        }
      )
  }

  fromNow(date) {
    return moment(date).fromNow();
  }

  goToDetail(discus){
    const { competId, discusId } = discus
    this.router.navigate([`/competition/detail/${competId}/discussion/${discusId}`], { relativeTo: this.route });
  }
}
