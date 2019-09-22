// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  constructor(private _router: Router) { }

  public onLanguageArts() {
    const self = this;
    self._router.navigate(['language-course']);
  }

}
