import { Component } from "@angular/core";

 @Component({
    selector: 'app-dashboard-content-layout',
    templateUrl: 'dashboard-content-layout.component.html',
    styleUrls: ['dashboard-content-layout.component.scss']
 })
 export class DashboardContentLayoutComponent {
   leftSidebarVisibility: boolean = false
   constructor() {}
 
   onClickSpeedDial(){
     this.leftSidebarVisibility = !this.leftSidebarVisibility
 
   }
 }