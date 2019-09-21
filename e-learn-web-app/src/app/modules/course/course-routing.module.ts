import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';

const routes: Routes = [{ path: '', component: CourseComponent }, { path: 'language-course', loadChildren: () => import('./language-course/language-course.module').then(m => m.LanguageCourseModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
