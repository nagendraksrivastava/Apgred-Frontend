import { Component, OnInit, Input } from '@angular/core';
import { TotalusersService, TotalUsers } from '../../services/totalusers.service'

@Component({
  selector: 'app-totalusers',
  templateUrl: './totalusers.component.html',
  styleUrls: ['./totalusers.component.css']
})
export class TotalusersComponent implements OnInit {

  users: TotalUsers;

  constructor(private service: TotalusersService) {
    
  }

  ngOnInit() {
    this.service.totalUsers().subscribe(users => {
      this.users = users;
    });
  }

}
