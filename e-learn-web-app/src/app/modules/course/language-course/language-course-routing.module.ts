import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageCourseComponent } from './language-course.component';

const routes: Routes = [{ path: '', component: LanguageCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageCourseRoutingModule { }
