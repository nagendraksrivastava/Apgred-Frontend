import { Component, OnInit, Input } from '@angular/core';
import { TotalusersService } from '../../services/totalusers.service'

@Component({
  selector: 'app-totalusers',
  templateUrl: './totalusers.component.html',
  styleUrls: ['./totalusers.component.css']
})
export class TotalusersComponent implements OnInit {

  @Input() total_users: number = 2;

  constructor(private service: TotalusersService) {
    this.total_users = service.totalUsers;
  }

  ngOnInit() {
    //call API here
  }

}
