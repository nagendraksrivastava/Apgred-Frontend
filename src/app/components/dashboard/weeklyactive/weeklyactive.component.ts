import { Component, OnInit } from '@angular/core';
import { ActiveUsers, ActiveusersService } from '../../../services/activeusers.service';
import { ActiveUsersFilters } from '../../../constants/app.constants';

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
