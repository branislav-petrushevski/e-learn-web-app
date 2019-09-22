import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathCourseRoutingModule } from './math-course-routing.module';
import { MathCourseComponent } from './math-course.component';


@NgModule({
  declarations: [MathCourseComponent],
  imports: [
    CommonModule,
    MathCourseRoutingModule
  ]
})
export class MathCourseModule { }
