import { Component, OnInit } from '@angular/core';
import { Feedback, GetfeedbackService } from 'src/app/services/getfeedback.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedback: Feedback[]
  category: string = 'all'
  loggedInUser: any;

  constructor(private getFeedbackService: GetfeedbackService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.get("loggedInUser");
    this.getFeedbackService.getAllVersions(this.loggedInUser.app_token, this.category)
    .subscribe(feedback => {
        this.feedback = feedback.feedback;
    }, error => {

    })
  }

}
