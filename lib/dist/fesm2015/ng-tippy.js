import { Injectable, NgModule, Directive, Input, ElementRef, defineInjectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import tippy from 'tippy.js';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TippyService {
    constructor() {
        this._tippyTooltipStates = new Map();
        this.tippyTooltipStates = new BehaviorSubject(new Map());
    }
    /**
     * @param {?} name
     * @param {?} state
     * @return {?}
     */
    setTippyState(name, state) {
        this._tippyTooltipStates.set(name, state);
        this.tippyTooltipStates.next(this._tippyTooltipStates);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getTippyState(name) {
        return this._tippyTooltipStates.has(name) ? this._tippyTooltipStates.get(name) : null;
    }
    /**
     * @return {?}
     */
    getAllTippies() {
        return this._tippyTooltipStates;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    hideTippy(name) {
        if (this._tippyTooltipStates.has(name)) {
            this._tippyTooltipStates.get(name).popper._tippy.hide();
        }
    }
}
TippyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ TippyService.ngInjectableDef = defineInjectable({ factory: function TippyService_Factory() { return new TippyService(); }, token: TippyService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TippyDirective {
    /**
     * @param {?} el
     * @param {?} tippyDirectiveService
     */
    constructor(el, tippyDirectiveService) {
        this.el = el;
        this.tippyDirectiveService = tippyDirectiveService;
        this.tippyName = null;
        this.tippyInstance = null;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const tippyInstance = tippy(this.el.nativeElement, this.tippyOptions || {}, true);
        const { name, shouldObserveState } = this.tippyOptions;
        this.tippyName = name;
        this.tippyInstance = tippyInstance;
        if (name === undefined && shouldObserveState) {
            throw new Error('A name is required for the tooltip');
        }
        else {
            this.tippyDirectiveService.setTippyState(this.tippyName, this.tippyInstance);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tippyDirectiveService.setTippyState(this.tippyName, this.tippyInstance);
    }
}
TippyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appTippy]'
            },] },
];
/** @nocollapse */
TippyDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TippyService }
];
TippyDirective.propDecorators = {
    tippyOptions: [{ type: Input, args: ['tippyOptions',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TippyModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: TippyModule,
            providers: [
                TippyService,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
TippyModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    TippyDirective
                ],
                exports: [
                    TippyDirective
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { TippyModule, TippyDirective, TippyService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGlwcHkuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLXRpcHB5L3NyYy9UaXBweS5zZXJ2aWNlLnRzIiwibmc6Ly9uZy10aXBweS9zcmMvVGlwcHkuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy10aXBweS9zcmMvVGlwcHkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUaXBweVNlcnZpY2Uge1xuICBwcml2YXRlIF90aXBweVRvb2x0aXBTdGF0ZXMgPSBuZXcgTWFwKCk7XG4gIHRpcHB5VG9vbHRpcFN0YXRlcyA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IE1hcCgpKTtcblxuICBzZXRUaXBweVN0YXRlKG5hbWUsIHN0YXRlKTogdm9pZCB7XG4gICAgdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLnNldChuYW1lLCBzdGF0ZSk7XG4gICAgdGhpcy50aXBweVRvb2x0aXBTdGF0ZXMubmV4dCh0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMpO1xuICB9XG5cbiAgZ2V0VGlwcHlTdGF0ZShuYW1lKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmhhcyhuYW1lKSA/IHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5nZXQobmFtZSkgOiBudWxsO1xuICB9XG5cbiAgZ2V0QWxsVGlwcGllcygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXM7XG4gIH1cblxuICBoaWRlVGlwcHkobmFtZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuZ2V0KG5hbWUpLnBvcHBlci5fdGlwcHkuaGlkZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5pbXBvcnQgeyBUaXBweVNlcnZpY2UgfSBmcm9tICcuL1RpcHB5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwVGlwcHldJ1xufSlcbmV4cG9ydCBjbGFzcyBUaXBweURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCd0aXBweU9wdGlvbnMnKSBwdWJsaWMgdGlwcHlPcHRpb25zOiBhbnk7XG4gIHRpcHB5TmFtZSA9IG51bGw7XG4gIHRpcHB5SW5zdGFuY2UgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdGlwcHlEaXJlY3RpdmVTZXJ2aWNlOiBUaXBweVNlcnZpY2UpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgdGlwcHlJbnN0YW5jZSA9IHRpcHB5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy50aXBweU9wdGlvbnMgfHwge30sIHRydWUpO1xuICAgIGNvbnN0IHsgbmFtZSwgc2hvdWxkT2JzZXJ2ZVN0YXRlIH0gPSB0aGlzLnRpcHB5T3B0aW9ucztcbiAgICB0aGlzLnRpcHB5TmFtZSA9IG5hbWU7XG4gICAgdGhpcy50aXBweUluc3RhbmNlID0gdGlwcHlJbnN0YW5jZTtcblxuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQgJiYgc2hvdWxkT2JzZXJ2ZVN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbmFtZSBpcyByZXF1aXJlZCBmb3IgdGhlIHRvb2x0aXAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXBweURpcmVjdGl2ZVNlcnZpY2Uuc2V0VGlwcHlTdGF0ZSh0aGlzLnRpcHB5TmFtZSwgdGhpcy50aXBweUluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy50aXBweURpcmVjdGl2ZVNlcnZpY2Uuc2V0VGlwcHlTdGF0ZSh0aGlzLnRpcHB5TmFtZSwgdGhpcy50aXBweUluc3RhbmNlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaXBweURpcmVjdGl2ZSB9IGZyb20gJy4vVGlwcHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRpcHB5U2VydmljZSB9IGZyb20gJy4vVGlwcHkuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGlwcHlEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRpcHB5RGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUaXBweU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUaXBweVNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7bUNBT2dDLElBQUksR0FBRyxFQUFFO2tDQUNsQixJQUFJLGVB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