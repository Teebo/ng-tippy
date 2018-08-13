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
        this.tippyDirectiveService.setTippyState(this.tippyOptions.name, tippyInstance.tooltips[0]);
    };
    TippyDirective.decorators = [
        { type: Directive, args: [{
                    /* tslint:disable-next-line */
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGlwcHkuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLXRpcHB5L3NyYy9UaXBweS5zZXJ2aWNlLnRzIiwibmc6Ly9uZy10aXBweS9zcmMvVGlwcHkuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy10aXBweS9zcmMvVGlwcHkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUaXBweVNlcnZpY2Uge1xuICBwcml2YXRlIF90aXBweVRvb2x0aXBTdGF0ZXMgPSBuZXcgTWFwKCk7XG4gIHRpcHB5VG9vbHRpcFN0YXRlcyA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IE1hcCgpKTtcblxuICBzZXRUaXBweVN0YXRlKG5hbWUsIHN0YXRlKTogdm9pZCB7XG4gICAgdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLnNldChuYW1lLCBzdGF0ZSk7XG4gICAgdGhpcy50aXBweVRvb2x0aXBTdGF0ZXMubmV4dCh0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMpO1xuICB9XG5cbiAgZ2V0VGlwcHlTdGF0ZShuYW1lKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmhhcyhuYW1lKSA/IHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5nZXQobmFtZSkgOiBudWxsO1xuICB9XG5cbiAgZ2V0QWxsVGlwcGllcygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXM7XG4gIH1cblxuICBoaWRlVGlwcHkobmFtZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuZ2V0KG5hbWUpLnBvcHBlci5fdGlwcHkuaGlkZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHsgVGlwcHlTZXJ2aWNlIH0gZnJvbSAnLi9UaXBweS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBzZWxlY3RvcjogJ1thcHBUaXBweV0nXG59KVxuZXhwb3J0IGNsYXNzIFRpcHB5RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd0aXBweU9wdGlvbnMnKSBwdWJsaWMgdGlwcHlPcHRpb25zOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB0aXBweURpcmVjdGl2ZVNlcnZpY2U6IFRpcHB5U2VydmljZSkge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB0aXBweUluc3RhbmNlID0gdGlwcHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpcHB5T3B0aW9ucyB8fCB7fSwgdHJ1ZSk7XG5cbiAgICB0aGlzLnRpcHB5RGlyZWN0aXZlU2VydmljZS5zZXRUaXBweVN0YXRlKHRoaXMudGlwcHlPcHRpb25zLm5hbWUsIHRpcHB5SW5zdGFuY2UudG9vbHRpcHNbMF0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRpcHB5RGlyZWN0aXZlIH0gZnJvbSAnLi9UaXBweS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGlwcHlTZXJ2aWNlIH0gZnJvbSAnLi9UaXBweS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUaXBweURpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGlwcHlEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaXBweU1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRpcHB5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRpcHB5U2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzttQ0FPZ0MsSUFBSSxHQUFHLEVBQUU7a0NBQ2xCLElBQUksZUFBZSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Ozs7Ozs7SUFFbkQsb0NBQWE7Ozs7O0lBQWIsVUFBYyxJQUFJLEVBQUUsS0FBSztRQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVELG9DQUFhOzs7O0lBQWIsVUFBYyxJQUFJO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUN2Rjs7OztJQUVELG9DQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0tBQ2pDOzs7OztJQUVELGdDQUFTOzs7O0lBQVQsVUFBVSxJQUFJO1FBQ1osSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6RDtLQUNGOztnQkF4QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3VCQUxEOzs7Ozs7O0FDQUE7SUFXRSx3QkFBb0IsRUFBYyxFQUFVLHFCQUFtQztRQUEzRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFjO1FBQzdFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0tBQ2Q7Ozs7SUFFTSxpQ0FBUTs7Ozs7UUFDYixJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztnQkFkL0YsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBUGtDLFVBQVU7Z0JBRXBDLFlBQVk7OzsrQkFPbEIsS0FBSyxTQUFDLGNBQWM7O3lCQVR2Qjs7Ozs7OztBQ0FBOzs7Ozs7O0lBaUJnQixtQkFBTzs7OztjQUFDLE1BQU07UUFDMUIsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxZQUFZO2dCQUNaLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ3hDO1NBQ0YsQ0FBQzs7O2dCQW5CTCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7cUJBQ2Y7aUJBQ0Y7O3NCQWZEOzs7Ozs7Ozs7Ozs7Ozs7In0=