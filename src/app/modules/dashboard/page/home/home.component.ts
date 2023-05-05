import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ICourse } from '../../dashboard.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products!: ICourse[];

  responsiveOptions!: any[];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getRecentCourses().subscribe((courses) => {
      this.products = courses;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }
}
