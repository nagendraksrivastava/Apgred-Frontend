import { Component, OnInit, ViewChild } from '@angular/core';
import { Feedback, GetfeedbackService, CategoryList } from 'src/app/services/getfeedback.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SendnotificationService } from '../../../services/sendnotification.service';


export class SendNotificationRequest {
  title: string
  notificationmessage: string
  feedbackId: number
}
declare var $;

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedback: Feedback[]
  selectedCategory: string = 'all'
  loggedInUser: any
  model: SendNotificationRequest = new SendNotificationRequest()
  @ViewChild('sendNotificationModal') sendNotificationModal;
  @ViewChild('f') form;
  categorylist: CategoryList[]

  constructor(private getFeedbackService: GetfeedbackService, private localStorageService: LocalStorageService,
    private notificationService: SendnotificationService) { }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.get("loggedInUser");
    this.getFeedbackService.getAllCategories(this.loggedInUser.app_token)
      .subscribe(data => {
        this.categorylist = data.category_list
        if (this.categorylist && this.categorylist.length > 0) {
          var all = new CategoryList(0, "all", false)
          this.categorylist.unshift(all)
          console.log(this.categorylist)
          this.getFeedbackForCategory(this.categorylist[0].name);
        }
      })
  }

  private getFeedbackForCategory(category: string) {
    this.selectedCategory = category
    this.getFeedbackService.getAllVersions(this.loggedInUser.app_token, category)
      .subscribe(feedback => {
        this.feedback = feedback.feedback;
      }, error => {
        this.feedback = null
      });
  }

  public openModal(feedback: Feedback) {
    console.log("calling openModal: " + feedback)
    this.notificationService.getNotificationSettings(this.loggedInUser.app_token)
      .subscribe(data => {
        if (data && data.status && data.status.code == 200) {
          this.model.title = data.data.title
          this.model.notificationmessage = data.data.content
          this.model.feedbackId = feedback.id
          $(this.sendNotificationModal.nativeElement).modal('show')
        }
      })
  }

  public closeModal() {
    $(this.sendNotificationModal.nativeElement).modal('hide')
  }

  public sendNotification() {
    var ids: number[] = new Array()
    ids.push(this.model.feedbackId)
    if (!!this.form && this.form.dirty) {
      this.notificationService.postNotificationSettings(this.loggedInUser.app_token, this.model.title, this.model.notificationmessage)
        .subscribe(data => {
          this.sendNotif(ids)
        })
    } else {
      this.sendNotif(ids);
    }
  }


  private sendNotif(ids: number[]) {
    this.notificationService.sendNotification(this.loggedInUser.app_token, ids).subscribe(data => {
      this.form.resetForm();
      this.closeModal();
    }, error => {
    });
  }
}
