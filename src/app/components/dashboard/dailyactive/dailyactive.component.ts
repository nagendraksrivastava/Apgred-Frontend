import { Component, OnInit } from '@angular/core';
import { ActiveUsers, ActiveusersService } from '../../../services/activeusers.service';
import { ActiveUsersFilters } from '../../../constants/app.constants';

@Component({
  selector: 'app-dailyactive',
  templateUrl: './dailyactive.component.html',
  styleUrls: ['./dailyactive.component.css']
})
export class DailyactiveComponent implements OnInit {

  users: ActiveUsers;

  constructor(private service: ActiveusersService) { }

  ngOnInit() {
    this.service.activeUsers(ActiveUsersFilters.daily).subscribe(users => {
      this.users = users;
    })
  }

}
