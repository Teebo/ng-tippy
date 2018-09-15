import { Directive, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';
import tippy from 'tippy.js';
import { TippyService } from './Tippy.service';

@Directive({
  selector: '[appTippy]'
})
export class TippyDirective implements OnInit, OnDestroy {
  @Input('tippyOptions')
  public tippyOptions: any;
  tippyName = null;
  tippyInstance = null;

  constructor(
    private el: ElementRef,
    private tippyDirectiveService: TippyService
  ) {
    this.el = el;
  }

  public ngOnInit() {
    const tippyOptions = this.tippyOptions || {};
    const tippyInstance = tippy(this.el.nativeElement, tippyOptions, true);
    this.tippyInstance = tippyInstance;

    if (tippyOptions.name === undefined && tippyOptions.shouldObserveState) {
      throw new Error('A name is required for the tooltip');
    } else {
      this.tippyDirectiveService.setTippyState(
        this.tippyName,
        this.tippyInstance
      );
    }
  }

  public ngOnDestroy() {
    this.tippyDirectiveService.setTippyState(
      this.tippyName,
      this.tippyInstance
    );
  }
}
