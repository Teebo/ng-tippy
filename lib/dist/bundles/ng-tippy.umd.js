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
                var tippyOptions = this.tippyOptions || {};
                /** @type {?} */
                var tippyInstance = tippy(this.el.nativeElement, tippyOptions, true);
                this.tippyInstance = tippyInstance;
                if (tippyOptions.name === undefined && tippyOptions.shouldObserveState) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGlwcHkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy10aXBweS9zcmMvVGlwcHkuc2VydmljZS50cyIsIm5nOi8vbmctdGlwcHkvc3JjL1RpcHB5LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctdGlwcHkvc3JjL1RpcHB5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdGlwcHlUb29sdGlwU3RhdGVzID0gbmV3IE1hcCgpO1xuICB0aXBweVRvb2x0aXBTdGF0ZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBNYXAoKSk7XG5cbiAgc2V0VGlwcHlTdGF0ZShuYW1lLCBzdGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5zZXQobmFtZSwgc3RhdGUpO1xuICAgIHRoaXMudGlwcHlUb29sdGlwU3RhdGVzLm5leHQodGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzKTtcbiAgfVxuXG4gIGdldFRpcHB5U3RhdGUobmFtZSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5oYXMobmFtZSkgPyB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuZ2V0KG5hbWUpIDogbnVsbDtcbiAgfVxuXG4gIGdldEFsbFRpcHBpZXMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzO1xuICB9XG5cbiAgaGlkZVRpcHB5KG5hbWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmhhcyhuYW1lKSkge1xuICAgICAgdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmdldChuYW1lKS5wb3BwZXIuX3RpcHB5LmhpZGUoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHsgVGlwcHlTZXJ2aWNlIH0gZnJvbSAnLi9UaXBweS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcFRpcHB5XSdcbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgndGlwcHlPcHRpb25zJylcbiAgcHVibGljIHRpcHB5T3B0aW9uczogYW55O1xuICB0aXBweU5hbWUgPSBudWxsO1xuICB0aXBweUluc3RhbmNlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGlwcHlEaXJlY3RpdmVTZXJ2aWNlOiBUaXBweVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHRpcHB5T3B0aW9ucyA9IHRoaXMudGlwcHlPcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHRpcHB5SW5zdGFuY2UgPSB0aXBweSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRpcHB5T3B0aW9ucywgdHJ1ZSk7XG4gICAgdGhpcy50aXBweUluc3RhbmNlID0gdGlwcHlJbnN0YW5jZTtcblxuICAgIGlmICh0aXBweU9wdGlvbnMubmFtZSA9PT0gdW5kZWZpbmVkICYmIHRpcHB5T3B0aW9ucy5zaG91bGRPYnNlcnZlU3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBuYW1lIGlzIHJlcXVpcmVkIGZvciB0aGUgdG9vbHRpcCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpcHB5RGlyZWN0aXZlU2VydmljZS5zZXRUaXBweVN0YXRlKFxuICAgICAgICB0aGlzLnRpcHB5TmFtZSxcbiAgICAgICAgdGhpcy50aXBweUluc3RhbmNlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnRpcHB5RGlyZWN0aXZlU2VydmljZS5zZXRUaXBweVN0YXRlKFxuICAgICAgdGhpcy50aXBweU5hbWUsXG4gICAgICB0aGlzLnRpcHB5SW5zdGFuY2VcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRpcHB5RGlyZWN0aXZlIH0gZnJvbSAnLi9UaXBweS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGlwcHlTZXJ2aWNlIH0gZnJvbSAnLi9UaXBweS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUaXBweURpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGlwcHlEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaXBweU1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRpcHB5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRpcHB5U2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdGFibGUiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O3VDQU9nQyxJQUFJLEdBQUcsRUFBRTtzQ0FDbEIsSUFBSUEsb0JBQWUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O1FBRW5ELG9DQUFhOzs7OztZQUFiLFVBQWMsSUFBSSxFQUFFLEtBQUs7Z0JBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQ3hEOzs7OztRQUVELG9DQUFhOzs7O1lBQWIsVUFBYyxJQUFJO2dCQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDdkY7Ozs7UUFFRCxvQ0FBYTs7O1lBQWI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7YUFDakM7Ozs7O1FBRUQsZ0NBQVM7Ozs7WUFBVCxVQUFVLElBQUk7Z0JBQ1osSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3pEO2FBQ0Y7O29CQXhCRkMsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7OzJCQUxEOzs7Ozs7O0FDQUE7UUFhRSx3QkFDVSxJQUNBO1lBREEsT0FBRSxHQUFGLEVBQUU7WUFDRiwwQkFBcUIsR0FBckIscUJBQXFCOzZCQUxuQixJQUFJO2lDQUNBLElBQUk7WUFNbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDZDs7OztRQUVNLGlDQUFROzs7OztnQkFDYixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQzs7Z0JBQzdDLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO2dCQUVuQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLFlBQVksQ0FBQyxrQkFBa0IsRUFBRTtvQkFDdEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2lCQUN2RDtxQkFBTTtvQkFDTCxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUN0QyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7aUJBQ0g7Ozs7O1FBR0ksb0NBQVc7Ozs7Z0JBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQ3RDLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQzs7O29CQW5DTEMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3FCQUN2Qjs7Ozs7d0JBTjZDQyxhQUFVO3dCQUUvQyxZQUFZOzs7O21DQU1sQkMsUUFBSyxTQUFDLGNBQWM7OzZCQVJ2Qjs7Ozs7OztBQ0FBOzs7Ozs7O1FBaUJnQixtQkFBTzs7OztzQkFBQyxNQUFNO2dCQUMxQixPQUFPO29CQUNMLFFBQVEsRUFBRSxXQUFXO29CQUNyQixTQUFTLEVBQUU7d0JBQ1QsWUFBWTt3QkFDWixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtxQkFDeEM7aUJBQ0YsQ0FBQzs7O29CQW5CTEMsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFOzRCQUNaLGNBQWM7eUJBQ2Y7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLGNBQWM7eUJBQ2Y7cUJBQ0Y7OzBCQWZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9