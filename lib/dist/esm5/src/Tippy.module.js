/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TippyDirective } from './Tippy.directive';
import { TippyService } from './Tippy.service';
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
export { TippyModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwcHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGlwcHkvIiwic291cmNlcyI6WyJzcmMvVGlwcHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7SUFjL0IsbUJBQU87Ozs7Y0FBQyxNQUFNO1FBQzFCLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxZQUFZO2dCQUNaLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ3hDO1NBQ0YsQ0FBQzs7O2dCQW5CTCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7cUJBQ2Y7aUJBQ0Y7O3NCQWZEOztTQWdCYSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaXBweURpcmVjdGl2ZSB9IGZyb20gJy4vVGlwcHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRpcHB5U2VydmljZSB9IGZyb20gJy4vVGlwcHkuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGlwcHlEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRpcHB5RGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUaXBweU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUaXBweVNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==