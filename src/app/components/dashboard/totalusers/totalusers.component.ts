import { Component, OnInit, Input } from '@angular/core';
import { TotalUsers, TotalusersService } from '../../../services/totalusers.service';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-totalusers',
  templateUrl: './totalusers.component.html',
  styleUrls: ['./totalusers.component.css']
})
export class TotalusersComponent implements OnInit {

  users: TotalUsers;
  loggedInUser: any;

  constructor(private service: TotalusersService, private localStorageService: LocalStorageService) {
    
  }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.get("loggedInUser");
    this.service.totalUsers(this.loggedInUser.app_token).subscribe(users => {
      this.users = users;
    });
  }

}
