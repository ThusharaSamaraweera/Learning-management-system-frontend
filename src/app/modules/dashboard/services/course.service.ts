import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICourse } from '../dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  courses: ICourse[] = [
    {
      id: '32',
      name: 'cou 1',
    },
    {
      id: '33',
      name: 'cou 2',
    },
    {
      id: '32',
      name: 'cou 1',
    },
    {
      id: '33',
      name: 'cou 2',
    },
    {
      id: '32',
      name: 'cou 1',
    },
    {
      id: '33',
      name: 'cou 2',
    },
    {
      id: '32',
      name: 'cou 1',
    },
    {
      id: '33',
      name: 'cou 2',
    },
  ];

  getRecentCourses(): Observable<ICourse[]> {
    return of(this.courses);
  }
}
