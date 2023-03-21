import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  imports: [DashboardRoutingModule, SharedModule, CommonModule],
  declarations: [DashboardComponent],
  exports: [],
  providers: [],
})
export class DashboardModule {}
