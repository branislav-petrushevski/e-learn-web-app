// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { CourseRoutingModule } from './course-routing.module';
import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';

// Components
import { CourseComponent } from './course.component';


@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedMaterialModule
  ]
})
export class CourseModule { }
