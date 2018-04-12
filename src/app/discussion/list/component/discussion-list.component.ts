import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import * as moment from 'moment';

import { Discussion, DiscussionService }  from '../../service/discussion.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})
export class DiscussionListComponent implements OnInit {

  discussions: Discussion[] = []

  ngOnInit() {
  }

  constructor(public discussionService: DiscussionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.discussionService.get()
      .subscribe(
        data => {
          this.discussions = data;
        }
      )
    // console.log(this.discussions);
  }

  fromNow(date) {
    return moment(date).fromNow();
  }

  goToDetail(discusId){
    this.router.navigate([`/discussion/${discusId}`], { relativeTo: this.route });
  }
}