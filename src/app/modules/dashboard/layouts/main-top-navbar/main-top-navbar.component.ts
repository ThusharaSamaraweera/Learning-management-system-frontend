import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-top-navbar',
  templateUrl: './main-top-navbar.component.html',
})
export class MainTopNavbarComponent {
  userAvatarMenuItems: MenuItem[] = [
    {label: this.translocoService.translate('Dashboard.MainTopNavbar.UserAvatarMenu.Profile')}
  ]

  constructor(
    private translocoService: TranslocoService
  ) {}
}
