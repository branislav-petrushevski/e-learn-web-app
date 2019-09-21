import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageCourseRoutingModule } from './language-course-routing.module';
import { LanguageCourseComponent } from './language-course.component';


@NgModule({
  declarations: [LanguageCourseComponent],
  imports: [
    CommonModule,
    LanguageCourseRoutingModule
  ]
})
export class LanguageCourseModule { }
