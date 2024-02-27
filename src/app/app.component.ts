import { Component, Input } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  coreCourse: Course = COURSES[0];
  rxjsCourse: Course = COURSES[1];
  deepCourse: Course = COURSES[2];
      

}
