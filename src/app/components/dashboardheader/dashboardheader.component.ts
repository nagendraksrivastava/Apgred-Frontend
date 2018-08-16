import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.css']
})
export class DashboardheaderComponent implements OnInit {

  currentRoute: string;

  routeMap = new Map<string, string>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
    ngOnInit() {
        this.fillRouteMap();
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            var route = this.router.url.replace('/', '');
            this.currentRoute = this.routeMap.get(route);
        });
    }

  private fillRouteMap() {
    this.routeMap.set("", "Home");
    this.routeMap.set("versionmanagement", "Version Management");
  }
}
