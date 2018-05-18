import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, NavigationEnd } from '@angular/router';

import { Discussion, DiscussionService } from '../service/discussion.service';
import { User, UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-discussion-modify',
  templateUrl: './discussion-modify.component.html',
  styleUrls: ['./discussion-modify.component.scss']
})
export class DiscussionModifyComponent implements OnInit {

  competId: number;
  discussion: Discussion = Object();
  user: User;

  // true: add, false: edit
  isAdd: boolean = true;

  constructor(private discussionService: DiscussionService
    , private userService: UserService
    , private route: ActivatedRoute
    , private router: Router) {
    this.user = this.userService.getUser();

    this.competId = +this.route.parent.snapshot.paramMap.get('competId');
    this.discussion.competId = this.competId;

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        if(event.url.search('edit') != -1) {
          this.isAdd = false;
          const discusId = +this.route.snapshot.paramMap.get('discusId');
          this.discussionService.getById(discusId).subscribe(discussion =>  {
              this.discussion = discussion;
            })
        } else if(event.url.search('add') != -1) {
          this.isAdd = true;
        }
      }
    })
    this.isAdd = true;
  }

  ngOnInit() {
  }

  addDiscussion() {
    this.discussionService.save(this.discussion).subscribe(
      data => {
        this.router.navigate([`/competition/detail/${this.competId}/discussion/${data.discusId}`], { relativeTo: this.route });
      }
    )
  }

  modifyDiscussion() {
    this.discussionService.modify(this.discussion).subscribe(
      data => {
        this.router.navigate([`/competition/detail/${this.competId}/discussion/${this.discussion.discusId}`], { relativeTo: this.route });
      }
    )
  }

  backToDiscussion() {
    this.router.navigate([`/competition/detail/${this.competId}/discussion`], { relativeTo: this.route });
  }
}
