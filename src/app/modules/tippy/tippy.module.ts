import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TippyDirective } from '../tippy.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TippyDirective
  ],
  exports: [
    TippyDirective
  ]
})
export class TippyModule { }
