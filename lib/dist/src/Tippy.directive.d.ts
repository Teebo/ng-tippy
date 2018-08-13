import { OnInit, ElementRef } from '@angular/core';
import { TippyService } from './Tippy.service';
export declare class TippyDirective implements OnInit {
    private el;
    private tippyDirectiveService;
    tippyOptions: any;
    constructor(el: ElementRef, tippyDirectiveService: TippyService);
    ngOnInit(): void;
}
