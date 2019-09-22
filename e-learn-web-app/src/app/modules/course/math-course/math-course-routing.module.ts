import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathCourseComponent } from './math-course.component';

const routes: Routes = [{ path: '', component: MathCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathCourseRoutingModule { }
