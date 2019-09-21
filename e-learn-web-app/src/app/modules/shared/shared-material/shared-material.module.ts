// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
  ]
})
export class SharedMaterialModule { }
