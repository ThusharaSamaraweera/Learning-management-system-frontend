import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LevelEnum } from '../../dashboard.model';

@Component({
  selector: 'app-course',
  templateUrl: './courses.component.html',
})
export class CourseComponent {
  level!: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit() {
    this.level = this.activatedRoute.snapshot.queryParams
    console.log("🚀 ~ file: courses.component.ts:19 ~ CourseComponent ~ ngOnInit ~ this.level:", this.level)
    
  }
}
