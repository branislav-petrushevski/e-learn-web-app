// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LanguageCourseComponent } from './language-course.component';
import { LanguageCourseFormComponent } from './language-course-form/language-course-form.component';

const routes: Routes = [
  { path: '', component: LanguageCourseComponent },
  { path: ':id/details', component: LanguageCourseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageCourseRoutingModule { }
