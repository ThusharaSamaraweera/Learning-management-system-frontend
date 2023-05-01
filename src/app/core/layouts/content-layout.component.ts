import { Component } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
})
export class ContentLayoutComponent {
  leftSidebarVisibility: boolean = false
  constructor() {}

  onClickSpeedDial(){
    this.leftSidebarVisibility = true

  }
}
