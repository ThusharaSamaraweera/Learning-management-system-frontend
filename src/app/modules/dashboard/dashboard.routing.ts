import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CoursesComponent } from './page/courses/courses.component';
import { CourseComponent } from './page/course/course.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'courses',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CoursesComponent,
      },
      {
        path: ':courseId',
        pathMatch: 'full',
        component: CourseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
