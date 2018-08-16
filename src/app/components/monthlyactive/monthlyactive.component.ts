import { Component, OnInit } from '@angular/core';
import { ActiveUsersFilters } from '../../constants/app.constants'
import { ActiveusersService, ActiveUsers } from '../../services/activeusers.service'

@Component({
  selector: 'app-monthlyactive',
  templateUrl: './monthlyactive.component.html',
  styleUrls: ['./monthlyactive.component.css']
})
export class MonthlyactiveComponent implements OnInit {

  users: ActiveUsers;

  constructor(private service: ActiveusersService) { }

  ngOnInit() {
    this.service.activeUsers(ActiveUsersFilters.monthly).subscribe(users => {
      this.users = users;
    })
  }

}
