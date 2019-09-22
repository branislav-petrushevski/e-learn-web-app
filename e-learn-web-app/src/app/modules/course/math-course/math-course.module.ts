import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathCourseRoutingModule } from './math-course-routing.module';
import { MathCourseComponent } from './math-course.component';
import { MathCourseListComponent } from './math-course-list/math-course-list.component';

import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';
import { MathCourseFormComponent, DialogDataExampleDialog } from './math-course-form/math-course-form.component';

@NgModule({
  entryComponents: [
    DialogDataExampleDialog
  ],
  declarations: [
    MathCourseComponent, 
    MathCourseListComponent, 
    MathCourseFormComponent,
    DialogDataExampleDialog
  ],
  imports: [
    CommonModule,
    MathCourseRoutingModule,
    SharedMaterialModule
  ]
})
export class MathCourseModule { }
