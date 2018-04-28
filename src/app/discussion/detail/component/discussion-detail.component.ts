import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import * as moment from 'moment';

import { Discussion, DiscussionService }  from '../../service/discussion.service';
import { Comment, CommentService } from '../../service/comment.service';
import { User, UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
styleUrls: ['./discussion-detail.component.scss']
})
export class DiscussionDetailComponent implements OnInit {

  discussion: Discussion = Object()
  comments: Comment[] = []
  user: User;

  ngOnInit() {
  }

  constructor(private discussionService: DiscussionService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.user = this.userService.getUser();
    const discusId = +this.route.snapshot.paramMap.get('discusId');
    this.discussionService.getById(discusId)
      .subscribe(
        data => {
          this.discussion = data;
        }
      )

    this.commentService.get('discussion', discusId).subscribe(
      data => {
        this.comments = data
      }
    )
  }

  goToDetail(discus){
    const { competId, discusId } = discus
    this.router.navigate([`/competition/detail/${competId}/discussion/${discusId}`], { relativeTo: this.route });
  }

  edit(discus){
    const { competId, discusId } = discus
    this.router.navigate([`/competition/detail/${competId}/discussion/${discusId}/edit`], { relativeTo: this.route });
  }
}
