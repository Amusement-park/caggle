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

  discussion: Discussion = Object();
  user: User;

  // true: add, false: edit
  isAdd: boolean = true;

  constructor(private discussionService: DiscussionService
    , private userService: UserService
    , private route: ActivatedRoute
    , private router: Router) {
    this.user = this.userService.getUser();

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
    const competId = +this.route.parent.snapshot.paramMap.get('competId');
    
    this.discussion.discusId = 0;
    this.discussion.competId = competId;
    this.discussion.author = 'todo-author';
    this.discussion.subject = 'todo-subject';

    this.discussionService.save(this.discussion).subscribe(
      data => {
        this.router.navigate([`/competition/detail/${competId}/discussion/${data.discusId}`], { relativeTo: this.route });
      }
    )
  }

  modifyDiscussion() {
    const competId = +this.route.parent.snapshot.paramMap.get('competId');
    this.discussionService.modify(this.discussion).subscribe(
      data => {
        this.router.navigate([`/competition/detail/${competId}/discussion/${this.discussion.discusId}`], { relativeTo: this.route });
      }
    )
  }

  backToDiscussion() {
    const competId = +this.route.parent.snapshot.paramMap.get('competId');
    this.router.navigate([`/competition/detail/${competId}/discussion`], { relativeTo: this.route });
  }
}
