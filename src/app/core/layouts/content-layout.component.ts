import { Component } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
})
export class ContentLayoutComponent {
  constructor() {}

  onClickSpeedDial(){
    console.log('speed')
  }
}
