import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LevelEnum } from '../../dashboard.model';

@Component({
  selector: 'app-dashboard-main-sidenav',
  templateUrl: './dashboard-main-sidenav.component.html',
})
export class DashboardMainSidebarComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        routerLink: '/',
      },
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-file',
        routerLink: '/dashboard',
      },
      {
        label: 'Course',
        icon: 'pi pi-fw pi-pencil',
        expanded: true,
        items: [
          {
            label: 'Level 1',
            icon: 'pi pi-fw pi-align-left',
            routerLink: `/dashboard/courses`,
            queryParams: { level: LevelEnum.LEVEL_1 },
          },
          {
            label: 'Level 2',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/dashboard/courses',

            queryParams: { level: LevelEnum.LEVEL_2 },
          },
          {
            label: 'Level 3',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/dashboard/courses',

            queryParams: { level: LevelEnum.LEVEL_3 },
          },
          {
            label: 'Level 4',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/dashboard/courses',

            queryParams: { level: LevelEnum.LEVEL_4 },
          },
        ],
      },
    ];
  }
}
