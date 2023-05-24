import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LevelEnum } from '../../dashboard.model';

@Component({
  selector: 'app-course',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements DoCheck{
  level!: any
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngDoCheck(): void {
    this.level = this.activatedRoute.snapshot.queryParams?.['level']
  }

  ngOnInit() {
    
  }
}
