(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('tippy.js'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-tippy', ['exports', '@angular/core', 'rxjs', 'tippy.js', '@angular/common'], factory) :
    (factory((global['ng-tippy'] = {}),global.ng.core,global.rxjs,null,global.ng.common));
}(this, (function (exports,i0,rxjs,tippy,common) { 'use strict';

    tippy = tippy && tippy.hasOwnProperty('default') ? tippy['default'] : tippy;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TippyService = (function () {
        function TippyService() {
            this._tippyTooltipStates = new Map();
            this.tippyTooltipStates = new rxjs.BehaviorSubject(new Map());
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */ TippyService.ngInjectableDef = i0.defineInjectable({ factory: function TippyService_Factory() { return new TippyService(); }, token: TippyService, providedIn: "root" });
        return TippyService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TippyDirective = (function () {
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
            { type: i0.Directive, args: [{
                        selector: '[appTippy]'
                    },] },
        ];
        /** @nocollapse */
        TippyDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: TippyService }
            ];
        };
        TippyDirective.propDecorators = {
            tippyOptions: [{ type: i0.Input, args: ['tippyOptions',] }]
        };
        return TippyDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TippyModule = (function () {
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.TippyModule = TippyModule;
    exports.TippyDirective = TippyDirective;
    exports.TippyService = TippyService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGlwcHkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy10aXBweS9zcmMvVGlwcHkuc2VydmljZS50cyIsIm5nOi8vbmctdGlwcHkvc3JjL1RpcHB5LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctdGlwcHkvc3JjL1RpcHB5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdGlwcHlUb29sdGlwU3RhdGVzID0gbmV3IE1hcCgpO1xuICB0aXBweVRvb2x0aXBTdGF0ZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBNYXAoKSk7XG5cbiAgc2V0VGlwcHlTdGF0ZShuYW1lLCBzdGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5zZXQobmFtZSwgc3RhdGUpO1xuICAgIHRoaXMudGlwcHlUb29sdGlwU3RhdGVzLm5leHQodGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzKTtcbiAgfVxuXG4gIGdldFRpcHB5U3RhdGUobmFtZSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5oYXMobmFtZSkgPyB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuZ2V0KG5hbWUpIDogbnVsbDtcbiAgfVxuXG4gIGdldEFsbFRpcHBpZXMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzO1xuICB9XG5cbiAgaGlkZVRpcHB5KG5hbWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmhhcyhuYW1lKSkge1xuICAgICAgdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmdldChuYW1lKS5wb3BwZXIuX3RpcHB5LmhpZGUoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHsgVGlwcHlTZXJ2aWNlIH0gZnJvbSAnLi9UaXBweS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcFRpcHB5XSdcbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgndGlwcHlPcHRpb25zJykgcHVibGljIHRpcHB5T3B0aW9uczogYW55O1xuICB0aXBweU5hbWUgPSBudWxsO1xuICB0aXBweUluc3RhbmNlID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHRpcHB5RGlyZWN0aXZlU2VydmljZTogVGlwcHlTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHRpcHB5SW5zdGFuY2UgPSB0aXBweSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMudGlwcHlPcHRpb25zIHx8IHt9LCB0cnVlKTtcbiAgICBjb25zdCB7IG5hbWUsIHNob3VsZE9ic2VydmVTdGF0ZSB9ID0gdGhpcy50aXBweU9wdGlvbnM7XG4gICAgdGhpcy50aXBweU5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGlwcHlJbnN0YW5jZSA9IHRpcHB5SW5zdGFuY2U7XG5cbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkICYmIHNob3VsZE9ic2VydmVTdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIG5hbWUgaXMgcmVxdWlyZWQgZm9yIHRoZSB0b29sdGlwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlwcHlEaXJlY3RpdmVTZXJ2aWNlLnNldFRpcHB5U3RhdGUodGhpcy50aXBweU5hbWUsIHRoaXMudGlwcHlJbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudGlwcHlEaXJlY3RpdmVTZXJ2aWNlLnNldFRpcHB5U3RhdGUodGhpcy50aXBweU5hbWUsIHRoaXMudGlwcHlJbnN0YW5jZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGlwcHlEaXJlY3RpdmUgfSBmcm9tICcuL1RpcHB5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUaXBweVNlcnZpY2UgfSBmcm9tICcuL1RpcHB5LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRpcHB5RGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUaXBweURpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRpcHB5TW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGlwcHlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVGlwcHlTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQmVoYXZpb3JTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJJbnB1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