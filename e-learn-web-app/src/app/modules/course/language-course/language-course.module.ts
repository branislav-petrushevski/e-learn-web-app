import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LanguageCourseComponent } from './language-course.component';
import { LanguageCourseListComponent } from './language-course-list/language-course-list.component';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';
import { LanguageCourseFormComponent } from './language-course-form/language-course-form.component';

// Routing
import { LanguageCourseRoutingModule } from './language-course-routing.module';

@NgModule({
  declarations: [
    LanguageCourseComponent, 
    LanguageCourseListComponent, 
    LanguageCourseFormComponent
  ],
  imports: [
    CommonModule,
    LanguageCourseRoutingModule,
    SharedMaterialModule
  ]
})
export class LanguageCourseModule { }
