import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './page/home/home.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardContentLayoutComponent } from './layouts/dashboard-content-layout/dashboard-content-layout.component';
import { DashboardMainSidebarComponent } from './layouts/dashboard-main-sidenav/dashboard-main-sidenav.component';
import { CourseComponent } from './page/course/courses.component';
import { RecentCourseListComponent } from './components/recent-course-list/recent-course-list.component';
import { CourseService } from './services/course.service';

@NgModule({
  imports: [DashboardRoutingModule, SharedModule, CommonModule, CoreModule],
  declarations: [HomeComponent, DashboardContentLayoutComponent, DashboardMainSidebarComponent, CourseComponent, RecentCourseListComponent],
  exports: [],
  providers: [
    CourseService
  ],
})
export class DashboardModule {}
