import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LevelEnum } from '../../dashboard.model';
import { EventEmitterService } from 'src/app/core/services/eventEmitter.service';

@Component({
  selector: 'app-dashboard-main-sidenav',
  templateUrl: './dashboard-main-sidenav.component.html',
})
export class DashboardMainSidebarComponent implements OnInit {
  items!: MenuItem[];

  constructor(private eventEmitterService: EventEmitterService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        routerLink: '/',
        command: () => {
          this.closeLeftSidebar();
        },
      },
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-file',
        routerLink: '/dashboard',
        command: () => {
          this.closeLeftSidebar();
        },
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
            command: () => {
              this.closeLeftSidebar();
            },
          },
          {
            label: 'Level 2',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/dashboard/courses',
            queryParams: { level: LevelEnum.LEVEL_2 },
            command: () => {
              this.closeLeftSidebar();
            },
          },
          {
            label: 'Level 3',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/dashboard/courses',
            queryParams: { level: LevelEnum.LEVEL_3 },
            command: () => {
              this.closeLeftSidebar();
            },
          },
          {
            label: 'Level 4',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/dashboard/courses',
            queryParams: { level: LevelEnum.LEVEL_4 },
            command: () => {
              this.closeLeftSidebar();
            },
          },
        ],
      },
    ];
  }

  closeLeftSidebar() {
    this.eventEmitterService.onCloseLeftSidebar.emit();
  }
}
