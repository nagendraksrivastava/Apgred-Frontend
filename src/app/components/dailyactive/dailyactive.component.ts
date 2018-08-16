import { Component, OnInit } from '@angular/core';
import { ActiveUsersFilters } from '../../constants/app.constants'
import { ActiveusersService, ActiveUsers } from '../../services/activeusers.service'

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
