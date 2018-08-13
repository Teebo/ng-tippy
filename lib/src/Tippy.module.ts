import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TippyDirective } from './Tippy.directive';
import { TippyService } from './Tippy.service';

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
export class TippyModule {
  public static forRoot(config): ModuleWithProviders {
    return {
      ngModule: TippyModule,
      providers: [
        TippyService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
