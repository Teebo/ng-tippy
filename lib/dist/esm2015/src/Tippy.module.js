/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TippyDirective } from './Tippy.directive';
import { TippyService } from './Tippy.service';
export class TippyModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwcHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGlwcHkvIiwic291cmNlcyI6WyJzcmMvVGlwcHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWEvQyxNQUFNOzs7OztJQUNHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUMxQixNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsWUFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUN4QztTQUNGLENBQUM7Ozs7WUFuQkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO2lCQUNmO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRpcHB5RGlyZWN0aXZlIH0gZnJvbSAnLi9UaXBweS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGlwcHlTZXJ2aWNlIH0gZnJvbSAnLi9UaXBweS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUaXBweURpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGlwcHlEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaXBweU1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRpcHB5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRpcHB5U2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19