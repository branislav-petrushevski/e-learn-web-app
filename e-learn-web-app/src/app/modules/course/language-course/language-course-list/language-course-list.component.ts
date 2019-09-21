import { Component, OnInit } from '@angular/core';
import language_questions from '../../../../../assets/questions.json';

@Component({
  selector: 'language-course-list',
  templateUrl: './language-course-list.component.html',
  styleUrls: ['./language-course-list.component.scss']
})
export class LanguageCourseListComponent implements OnInit {

  public items: any[];

  constructor() { }

  ngOnInit() {
    const self = this;
    self.items = language_questions;
  }

}
