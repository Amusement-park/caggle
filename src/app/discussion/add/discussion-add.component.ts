import { Component, OnInit } from '@angular/core';
import { Discussion, DiscussionService } from '../service/discussion.service';

@Component({
  selector: 'app-discussion-add',
  templateUrl: './discussion-add.component.html',
  styleUrls: ['./discussion-add.component.scss']
})
export class DiscussionAddComponent implements OnInit {

  title: string = '';
  content: string = '';

  constructor(private discussionService: DiscussionService) { }

  ngOnInit() {
  }

  testClick() {
    const discussion = new Discussion(0, 1, this.title, this.content, 'todo-author', 'todo-subject')
    /*
export class Discussion{
  constructor(public discusId: number
              ,public competitionId: number
              ,public title: string
              ,public content: string
              ,public author: string
              ,public subject: string
              ,public regDate: Date
              ,public editDate: Date) {}
}
  }
  */
    this.discussionService.save(discussion).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
