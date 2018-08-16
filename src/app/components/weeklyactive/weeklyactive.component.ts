import { Component, OnInit } from '@angular/core';
import { ActiveUsersFilters } from '../../constants/app.constants'
import { ActiveusersService, ActiveUsers } from '../../services/activeusers.service'

@Component({
  selector: 'app-weeklyactive',
  templateUrl: './weeklyactive.component.html',
  styleUrls: ['./weeklyactive.component.css']
})
export class WeeklyactiveComponent implements OnInit {

  users: ActiveUsers;

  constructor(private service: ActiveusersService) { }

  ngOnInit() {
    this.service.activeUsers(ActiveUsersFilters.weekly).subscribe(users => {
      this.users = users;
    })
  }

}
