import { Component } from "@angular/core";
import { ICourse } from "../../dashboard.model";
import { CourseService } from "../../services/course.service";

@Component({
    selector: 'app-recent-course-list',
    templateUrl: './recent-course-list.component.html'
})
export class RecentCourseListComponent {
    products!: ICourse[];

    responsiveOptions!: any[];
  
    constructor(private courseService: CourseService) {}
  
    ngOnInit() {
      this.courseService.getRecentCourses().subscribe((courses) => {
        this.products = courses;
      });
  
      this.responsiveOptions = [
        {
          breakpoint: '1400px',
          numVisible: 4,
          numScroll: 1,
        },
        {
          breakpoint: '1200px',
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: '992px',
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: '768px',
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