import { Component, OnInit } from '@angular/core';
import { ActiveUsers, ActiveusersService } from '../../../services/activeusers.service';
import { ActiveUsersFilters } from '../../../constants/app.constants';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-monthlyactive',
  templateUrl: './monthlyactive.component.html',
  styleUrls: ['./monthlyactive.component.css']
})
export class MonthlyactiveComponent implements OnInit {

  users: ActiveUsers;
  loggedInUser: any;

  constructor(private service: ActiveusersService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.get("loggedInUser");
    this.service.activeUsers(ActiveUsersFilters.monthly, this.loggedInUser.app_token).subscribe(users => {
      this.users = users;
    })
  }

}
