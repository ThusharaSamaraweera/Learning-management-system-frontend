import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardContentLayoutComponent } from './layouts/dashboard-content-layout/dashboard-content-layout.component';
import { DashboardMainSidebarComponent } from './layouts/dashboard-main-sidenav/dashboard-main-sidenav.component';
import { CoursesComponent } from './page/courses/courses.component';
import { RecentCourseListComponent } from './components/recent-course-list/recent-course-list.component';
import { CourseService } from './services/course.service';
import { CourseComponent } from './page/course/course.component';

@NgModule({
  imports: [DashboardRoutingModule, SharedModule, CommonModule, CoreModule],
  declarations: [
    DashboardComponent,
    DashboardContentLayoutComponent,
    DashboardMainSidebarComponent,
    CoursesComponent,
    RecentCourseListComponent,
    CourseComponent,
  ],
  exports: [],
  providers: [CourseService],
})
export class DashboardModule {}
