import { Component, OnInit } from '@angular/core';
import { ActiveUsers, ActiveusersService } from '../../../services/activeusers.service';
import { ActiveUsersFilters } from '../../../constants/app.constants';

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
