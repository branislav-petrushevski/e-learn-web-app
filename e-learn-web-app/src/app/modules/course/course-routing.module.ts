// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CourseComponent } from './course.component';

const routes: Routes = [
  { path: '', component: CourseComponent }, 
  { path: 'language-course', loadChildren: () => import('./language-course/language-course.module').then(m => m.LanguageCourseModule) }, 
  { path: 'math-course', loadChildren: () => import('./math-course/math-course.module').then(m => m.MathCourseModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
