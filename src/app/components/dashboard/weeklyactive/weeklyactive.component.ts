import { Component, OnInit } from '@angular/core';
import { ActiveUsers, ActiveusersService } from '../../../services/activeusers.service';
import { ActiveUsersFilters } from '../../../constants/app.constants';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-weeklyactive',
  templateUrl: './weeklyactive.component.html',
  styleUrls: ['./weeklyactive.component.css']
})
export class WeeklyactiveComponent implements OnInit {

  users: ActiveUsers;
  loggedInUser: any;

  constructor(private service: ActiveusersService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.get("loggedInUser");
    this.service.activeUsers(ActiveUsersFilters.weekly, this.loggedInUser.app_token).subscribe(users => {
      this.users = users;
    })
  }

}
