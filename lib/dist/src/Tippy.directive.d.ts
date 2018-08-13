import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { TippyService } from './Tippy.service';
export declare class TippyDirective implements OnInit, OnDestroy {
    private el;
    private tippyDirectiveService;
    tippyOptions: any;
    tippyName: any;
    tippyInstance: any;
    constructor(el: ElementRef, tippyDirectiveService: TippyService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
