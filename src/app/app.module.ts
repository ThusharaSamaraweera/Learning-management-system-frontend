import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './core/services/transloco-root.module';
import { preloadTranslations } from './preLoaders/preloadTranslations';
import { PrimeNgModules } from './shared/primeng-module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModules,
    TranslocoRootModule,
    BrowserAnimationsModule,
    TranslocoRootModule
  ],
  bootstrap: [AppComponent],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: preloadTranslations,
    //   multi: true,
    //   deps: [TranslocoService],
    // },
  ]
})
export class AppModule { }
