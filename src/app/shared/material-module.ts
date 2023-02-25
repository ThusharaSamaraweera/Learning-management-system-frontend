import { NgModule } from '@angular/core';


import { MatIconModule } from '@angular/material/icon';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  exports: [MatIconModule],
})
export class MaterialModule {}
