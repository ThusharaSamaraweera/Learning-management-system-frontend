import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
})
export class CourseComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute){};

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params);
  }
}
