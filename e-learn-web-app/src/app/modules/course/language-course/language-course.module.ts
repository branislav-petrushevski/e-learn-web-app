import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageCourseRoutingModule } from './language-course-routing.module';
import { LanguageCourseComponent } from './language-course.component';
import { LanguageCourseListComponent } from './language-course-list/language-course-list.component';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';


@NgModule({
  declarations: [LanguageCourseComponent, LanguageCourseListComponent],
  imports: [
    CommonModule,
    LanguageCourseRoutingModule,
    SharedMaterialModule
  ]
})
export class LanguageCourseModule { }
