import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './page/dashboard/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CoreModule } from 'src/app/core/core.module';
@NgModule({
  imports: [
    CoreModule,
    HomeRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [HomeComponent, SignInComponent],
  exports: [],
  providers: [],
})
export class HomeModule {}
