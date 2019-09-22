import { Component, OnInit } from '@angular/core';
import math_questions from '../../../../../assets/math_questions.json';

@Component({
  selector: 'math-course-list',
  templateUrl: './math-course-list.component.html',
  styleUrls: ['./math-course-list.component.scss']
})
export class MathCourseListComponent implements OnInit {

  public items: any[];

  ngOnInit() {
    const self = this;
    self.items = math_questions;
  }

}
