import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Discussion, DiscussionService }  from '../../service/discussion.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  discussions: Discussion[] = []

  ngOnInit() {
  }

  constructor(public discussionService: DiscussionService) {
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

}
