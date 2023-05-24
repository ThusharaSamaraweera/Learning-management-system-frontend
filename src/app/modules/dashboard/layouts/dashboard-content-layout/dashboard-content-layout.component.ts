import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EventEmitterService } from 'src/app/core/services/eventEmitter.service';

@Component({
  selector: 'app-dashboard-content-layout',
  templateUrl: 'dashboard-content-layout.component.html',
  styleUrls: ['dashboard-content-layout.component.scss'],
})
export class DashboardContentLayoutComponent implements OnInit, OnDestroy {
  leftSidebarVisibility: boolean = false;
  destroy$ = new Subject<boolean>();

  constructor(private eventEmitter: EventEmitterService) {

  }

  ngOnInit(): void {
    this.eventEmitter.onCloseLeftSidebar.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.leftSidebarVisibility = !this.leftSidebarVisibility
    })
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


  onClickSpeedDial() {
    this.leftSidebarVisibility = !this.leftSidebarVisibility;
  }
}
