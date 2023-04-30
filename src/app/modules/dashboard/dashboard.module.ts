import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './page/home/home.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { CoreModule } from 'src/app/core/core.module';
import { MainTopNavbarComponent } from './layouts/main-top-navbar/main-top-navbar.component';
import { DashboardContentLayoutComponent } from './layouts/dashboard-content-layout/dashboard-content-layout.component';
import { DashboardMainSidebarComponent } from './layouts/dashboard-main-sidenav/dashboard-main-sidenav.component';
import { CourseComponent } from './page/course/courses.component';

@NgModule({
  imports: [DashboardRoutingModule, SharedModule, CommonModule, CoreModule],
  declarations: [HomeComponent, MainTopNavbarComponent, DashboardContentLayoutComponent, DashboardMainSidebarComponent, CourseComponent],
  exports: [],
  providers: [],
})
export class DashboardModule {}
