// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule
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
    MatCardModule,
    MatListModule
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule
  ]
})
export class SharedMaterialModule { }
