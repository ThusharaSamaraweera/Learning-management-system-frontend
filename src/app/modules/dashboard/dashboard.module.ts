import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { CoreModule } from 'src/app/core/core.module';
import { MainTopNavbarComponent } from './layouts/main-top-navbar/main-top-navbar.component';

@NgModule({
  imports: [DashboardRoutingModule, SharedModule, CommonModule, CoreModule],
  declarations: [DashboardComponent, MainTopNavbarComponent],
  exports: [],
  providers: [],
})
export class DashboardModule {}
