import { Injectable, NgModule, Directive, Input, ElementRef, defineInjectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import tippy from 'tippy.js';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TippyService = /** @class */ (function () {
    function TippyService() {
        this._tippyTooltipStates = new Map();
        this.tippyTooltipStates = new BehaviorSubject(new Map());
    }
    /**
     * @param {?} name
     * @param {?} state
     * @return {?}
     */
    TippyService.prototype.setTippyState = /**
     * @param {?} name
     * @param {?} state
     * @return {?}
     */
    function (name, state) {
        this._tippyTooltipStates.set(name, state);
        this.tippyTooltipStates.next(this._tippyTooltipStates);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    TippyService.prototype.getTippyState = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this._tippyTooltipStates.has(name) ? this._tippyTooltipStates.get(name) : null;
    };
    /**
     * @return {?}
     */
    TippyService.prototype.getAllTippies = /**
     * @return {?}
     */
    function () {
        return this._tippyTooltipStates;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    TippyService.prototype.hideTippy = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this._tippyTooltipStates.has(name)) {
            this._tippyTooltipStates.get(name).popper._tippy.hide();
        }
    };
    TippyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ TippyService.ngInjectableDef = defineInjectable({ factory: function TippyService_Factory() { return new TippyService(); }, token: TippyService, providedIn: "root" });
    return TippyService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TippyDirective = /** @class */ (function () {
    function TippyDirective(el, tippyDirectiveService) {
        this.el = el;
        this.tippyDirectiveService = tippyDirectiveService;
        this.tippyName = null;
        this.tippyInstance = null;
        this.el = el;
    }
    /**
     * @return {?}
     */
    TippyDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tippyInstance = tippy(this.el.nativeElement, this.tippyOptions || {}, true);
        var _a = this.tippyOptions, name = _a.name, shouldObserveState = _a.shouldObserveState;
        this.tippyName = name;
        this.tippyInstance = tippyInstance;
        if (name === undefined && shouldObserveState) {
            throw new Error('A name is required for the tooltip');
        }
        else {
            this.tippyDirectiveService.setTippyState(this.tippyName, this.tippyInstance);
        }
    };
    /**
     * @return {?}
     */
    TippyDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tippyDirectiveService.setTippyState(this.tippyName, this.tippyInstance);
    };
    TippyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appTippy]'
                },] },
    ];
    /** @nocollapse */
    TippyDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TippyService }
    ]; };
    TippyDirective.propDecorators = {
        tippyOptions: [{ type: Input, args: ['tippyOptions',] }]
    };
    return TippyDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TippyModule = /** @class */ (function () {
    function TippyModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    TippyModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: TippyModule,
            providers: [
                TippyService,
                { provide: 'config', useValue: config }
            ]
        };
    };
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
    return TippyModule;
}());

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