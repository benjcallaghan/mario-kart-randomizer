import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumPipe } from './enum.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EnumPipe],
  exports: [
    EnumPipe
  ]
})
export class PipesModule { }
