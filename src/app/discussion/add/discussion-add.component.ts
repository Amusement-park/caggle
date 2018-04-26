import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Discussion, DiscussionService } from '../service/discussion.service';
import { User, UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-discussion-add',
  templateUrl: './discussion-add.component.html',
  styleUrls: ['./discussion-add.component.scss']
})
export class DiscussionAddComponent implements OnInit {

  title: string = '';
  content: string = '';
  user: User;

  constructor(private discussionService: DiscussionService
    , private userService: UserService
    , private route: ActivatedRoute
    , private router: Router) {
    this.user = this.userService.getUser();
    console.log(this.user);
  }

  ngOnInit() {
  }

  addDiscussion() {
    const discussion = new Discussion(0, 1, this.title, this.content, 'todo-author', 'todo-subject')

    this.discussionService.save(discussion).subscribe(
      data => {
        console.log(data)
      }
    )
  }

  backToDiscussion() {
    const competId = +this.route.parent.snapshot.paramMap.get('competId');
    this.router.navigate([`/competition/detail/${competId}/discussion`], { relativeTo: this.route });
  }
}
