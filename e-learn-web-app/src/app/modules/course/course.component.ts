import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public onLanguageArts() {
    const self = this;
    self._router.navigate(['language-course']);
  }

}
