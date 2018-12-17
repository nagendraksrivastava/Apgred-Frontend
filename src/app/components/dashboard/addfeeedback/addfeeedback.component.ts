import { Component, OnInit, ViewChild } from '@angular/core';
import { GetfeedbackService, CategoryList } from 'src/app/services/getfeedback.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-addfeeedback',
  templateUrl: './addfeeedback.component.html',
  styleUrls: ['./addfeeedback.component.scss']
})
export class AddfeeedbackComponent implements OnInit {

  loggedInUser: any
  categorylist: CategoryList[]
  collapse: boolean = true;
  model: any = {};
  loading = false;
  @ViewChild('f') form;
  
  constructor(private getFeedbackService: GetfeedbackService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.get("loggedInUser");
    this.getAllCategories();
  }

  private getAllCategories() {
    this.getFeedbackService.getAllCategories(this.loggedInUser.app_token)
      .subscribe(data => {
        this.categorylist = data.category_list;
        console.log(this.categorylist)
      });
  }

  scroll(el) {
    if (!this.collapse) {
      setTimeout(function () {
        el.scrollIntoView({ behavior: "smooth" });
      }.bind(this), 500);
    }
  }

  public changeEnabled(category: CategoryList){

  }

  public addCategory(){
    this.loading = true;
    this.getFeedbackService.postCategory(this.loggedInUser.app_token, this.model.categoryName, (this.model.isEnabled != null ? this.model.isEnabled : false))
    .subscribe(data => {
      this.loading = false;
        this.form.resetForm();
        this.getAllCategories()
    })
  }

}
