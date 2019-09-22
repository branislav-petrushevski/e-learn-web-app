// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MathCourseComponent } from './math-course.component';
import { MathCourseFormComponent } from './math-course-form/math-course-form.component';

const routes: Routes = [
  { path: '', component: MathCourseComponent },
  { path: ':id/details', component: MathCourseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathCourseRoutingModule { }
