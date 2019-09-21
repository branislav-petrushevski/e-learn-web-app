// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedMaterialModule } from '../shared-material/shared-material.module';

// Components
import { SharedNavComponent } from './shared-nav/shared-nav.component';

@NgModule({
  declarations: [
    SharedNavComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    SharedNavComponent
  ]
})
export class SharedNavModule { }
