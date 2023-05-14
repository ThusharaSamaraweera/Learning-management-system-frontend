import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContentLayoutComponent } from './modules/dashboard/layouts/dashboard-content-layout/dashboard-content-layout.component';
import { ContentLayoutComponent } from './core/layouts/content-layout.component';
import { EventEmitterService } from './core/services/eventEmitter.service';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),   
      },
      {
        path: 'dashboard',
        component: DashboardContentLayoutComponent,
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EventEmitterService]
})
export class AppRoutingModule {}
