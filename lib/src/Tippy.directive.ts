import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import tippy from 'tippy.js';
import { TippyService } from './Tippy.service';

@Directive({
  /* tslint:disable-next-line */
  selector: '[appTippy]'
})
export class TippyDirective implements OnInit {
  @Input('tippyOptions') public tippyOptions: any;

  constructor(private el: ElementRef, private tippyDirectiveService: TippyService) {
    this.el = el;
  }

  public ngOnInit() {
    const tippyInstance = tippy(this.el.nativeElement, this.tippyOptions || {}, true);

    this.tippyDirectiveService.setTippyState(this.tippyOptions.name, tippyInstance.tooltips[0]);
  }
}
