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
        const tippyOptions = this.tippyOptions || {};
        /** @type {?} */
        const tippyInstance = tippy(this.el.nativeElement, tippyOptions, true);
        this.tippyInstance = tippyInstance;
        if (tippyOptions.name === undefined && tippyOptions.shouldObserveState) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGlwcHkuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLXRpcHB5L3NyYy9UaXBweS5zZXJ2aWNlLnRzIiwibmc6Ly9uZy10aXBweS9zcmMvVGlwcHkuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy10aXBweS9zcmMvVGlwcHkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUaXBweVNlcnZpY2Uge1xuICBwcml2YXRlIF90aXBweVRvb2x0aXBTdGF0ZXMgPSBuZXcgTWFwKCk7XG4gIHRpcHB5VG9vbHRpcFN0YXRlcyA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IE1hcCgpKTtcblxuICBzZXRUaXBweVN0YXRlKG5hbWUsIHN0YXRlKTogdm9pZCB7XG4gICAgdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLnNldChuYW1lLCBzdGF0ZSk7XG4gICAgdGhpcy50aXBweVRvb2x0aXBTdGF0ZXMubmV4dCh0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMpO1xuICB9XG5cbiAgZ2V0VGlwcHlTdGF0ZShuYW1lKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmhhcyhuYW1lKSA/IHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5nZXQobmFtZSkgOiBudWxsO1xuICB9XG5cbiAgZ2V0QWxsVGlwcGllcygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXM7XG4gIH1cblxuICBoaWRlVGlwcHkobmFtZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuZ2V0KG5hbWUpLnBvcHBlci5fdGlwcHkuaGlkZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5pbXBvcnQgeyBUaXBweVNlcnZpY2UgfSBmcm9tICcuL1RpcHB5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwVGlwcHldJ1xufSlcbmV4cG9ydCBjbGFzcyBUaXBweURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCd0aXBweU9wdGlvbnMnKVxuICBwdWJsaWMgdGlwcHlPcHRpb25zOiBhbnk7XG4gIHRpcHB5TmFtZSA9IG51bGw7XG4gIHRpcHB5SW5zdGFuY2UgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aXBweURpcmVjdGl2ZVNlcnZpY2U6IFRpcHB5U2VydmljZVxuICApIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgdGlwcHlPcHRpb25zID0gdGhpcy50aXBweU9wdGlvbnMgfHwge307XG4gICAgY29uc3QgdGlwcHlJbnN0YW5jZSA9IHRpcHB5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGlwcHlPcHRpb25zLCB0cnVlKTtcbiAgICB0aGlzLnRpcHB5SW5zdGFuY2UgPSB0aXBweUluc3RhbmNlO1xuXG4gICAgaWYgKHRpcHB5T3B0aW9ucy5uYW1lID09PSB1bmRlZmluZWQgJiYgdGlwcHlPcHRpb25zLnNob3VsZE9ic2VydmVTdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIG5hbWUgaXMgcmVxdWlyZWQgZm9yIHRoZSB0b29sdGlwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlwcHlEaXJlY3RpdmVTZXJ2aWNlLnNldFRpcHB5U3RhdGUoXG4gICAgICAgIHRoaXMudGlwcHlOYW1lLFxuICAgICAgICB0aGlzLnRpcHB5SW5zdGFuY2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudGlwcHlEaXJlY3RpdmVTZXJ2aWNlLnNldFRpcHB5U3RhdGUoXG4gICAgICB0aGlzLnRpcHB5TmFtZSxcbiAgICAgIHRoaXMudGlwcHlJbnN0YW5jZVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGlwcHlEaXJlY3RpdmUgfSBmcm9tICcuL1RpcHB5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUaXBweVNlcnZpY2UgfSBmcm9tICcuL1RpcHB5LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRpcHB5RGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUaXBweURpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRpcHB5TW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGlwcHlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVGlwcHlTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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