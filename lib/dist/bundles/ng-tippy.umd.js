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
            { type: i0.Directive, args: [{
                        /* tslint:disable-next-line */
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGlwcHkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy10aXBweS9zcmMvVGlwcHkuc2VydmljZS50cyIsIm5nOi8vbmctdGlwcHkvc3JjL1RpcHB5LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctdGlwcHkvc3JjL1RpcHB5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdGlwcHlUb29sdGlwU3RhdGVzID0gbmV3IE1hcCgpO1xuICB0aXBweVRvb2x0aXBTdGF0ZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBNYXAoKSk7XG5cbiAgc2V0VGlwcHlTdGF0ZShuYW1lLCBzdGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5zZXQobmFtZSwgc3RhdGUpO1xuICAgIHRoaXMudGlwcHlUb29sdGlwU3RhdGVzLm5leHQodGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzKTtcbiAgfVxuXG4gIGdldFRpcHB5U3RhdGUobmFtZSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5oYXMobmFtZSkgPyB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuZ2V0KG5hbWUpIDogbnVsbDtcbiAgfVxuXG4gIGdldEFsbFRpcHBpZXMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzO1xuICB9XG5cbiAgaGlkZVRpcHB5KG5hbWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmhhcyhuYW1lKSkge1xuICAgICAgdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmdldChuYW1lKS5wb3BwZXIuX3RpcHB5LmhpZGUoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcbmltcG9ydCB7IFRpcHB5U2VydmljZSB9IGZyb20gJy4vVGlwcHkuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICdbYXBwVGlwcHldJ1xufSlcbmV4cG9ydCBjbGFzcyBUaXBweURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndGlwcHlPcHRpb25zJykgcHVibGljIHRpcHB5T3B0aW9uczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdGlwcHlEaXJlY3RpdmVTZXJ2aWNlOiBUaXBweVNlcnZpY2UpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgdGlwcHlJbnN0YW5jZSA9IHRpcHB5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy50aXBweU9wdGlvbnMgfHwge30sIHRydWUpO1xuXG4gICAgdGhpcy50aXBweURpcmVjdGl2ZVNlcnZpY2Uuc2V0VGlwcHlTdGF0ZSh0aGlzLnRpcHB5T3B0aW9ucy5uYW1lLCB0aXBweUluc3RhbmNlLnRvb2x0aXBzWzBdKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaXBweURpcmVjdGl2ZSB9IGZyb20gJy4vVGlwcHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRpcHB5U2VydmljZSB9IGZyb20gJy4vVGlwcHkuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGlwcHlEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRpcHB5RGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUaXBweU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUaXBweVNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCZWhhdmlvclN1YmplY3QiLCJJbmplY3RhYmxlIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzt1Q0FPZ0MsSUFBSSxHQUFHLEVBQUU7c0NBQ2xCLElBQUlBLG9CQUFlLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7Ozs7OztRQUVuRCxvQ0FBYTs7Ozs7WUFBYixVQUFjLElBQUksRUFBRSxLQUFLO2dCQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUN4RDs7Ozs7UUFFRCxvQ0FBYTs7OztZQUFiLFVBQWMsSUFBSTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3ZGOzs7O1FBRUQsb0NBQWE7OztZQUFiO2dCQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDOzs7OztRQUVELGdDQUFTOzs7O1lBQVQsVUFBVSxJQUFJO2dCQUNaLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUN6RDthQUNGOztvQkF4QkZDLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7OzsyQkFMRDs7Ozs7OztBQ0FBO1FBV0Usd0JBQW9CLEVBQWMsRUFBVSxxQkFBbUM7WUFBM0QsT0FBRSxHQUFGLEVBQUUsQ0FBWTtZQUFVLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBYztZQUM3RSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNkOzs7O1FBRU0saUNBQVE7Ozs7O2dCQUNiLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztvQkFkL0ZDLFlBQVMsU0FBQzs7d0JBRVQsUUFBUSxFQUFFLFlBQVk7cUJBQ3ZCOzs7Ozt3QkFQa0NDLGFBQVU7d0JBRXBDLFlBQVk7Ozs7bUNBT2xCQyxRQUFLLFNBQUMsY0FBYzs7NkJBVHZCOzs7Ozs7O0FDQUE7Ozs7Ozs7UUFpQmdCLG1CQUFPOzs7O3NCQUFDLE1BQU07Z0JBQzFCLE9BQU87b0JBQ0wsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFNBQVMsRUFBRTt3QkFDVCxZQUFZO3dCQUNaLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO3FCQUN4QztpQkFDRixDQUFDOzs7b0JBbkJMQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxZQUFZLEVBQUU7NEJBQ1osY0FBYzt5QkFDZjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsY0FBYzt5QkFDZjtxQkFDRjs7MEJBZkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=