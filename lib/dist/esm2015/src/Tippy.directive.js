/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import tippy from 'tippy.js';
import { TippyService } from './Tippy.service';
export class TippyDirective {
    /**
     * @param {?} el
     * @param {?} tippyDirectiveService
     */
    constructor(el, tippyDirectiveService) {
        this.el = el;
        this.tippyDirectiveService = tippyDirectiveService;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const tippyInstance = tippy(this.el.nativeElement, this.tippyOptions || {}, true);
        this.tippyDirectiveService.setTippyState(this.tippyOptions.name, tippyInstance.tooltips[0]);
    }
}
TippyDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line */
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
if (false) {
    /** @type {?} */
    TippyDirective.prototype.tippyOptions;
    /** @type {?} */
    TippyDirective.prototype.el;
    /** @type {?} */
    TippyDirective.prototype.tippyDirectiveService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwcHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGlwcHkvIiwic291cmNlcyI6WyJzcmMvVGlwcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxNQUFNOzs7OztJQUdKLFlBQW9CLEVBQWMsRUFBVSxxQkFBbUM7UUFBM0QsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBYztRQUM3RSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztLQUNkOzs7O0lBRU0sUUFBUTs7UUFDYixNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7WUFkL0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztZQVBrQyxVQUFVO1lBRXBDLFlBQVk7OzsyQkFPbEIsS0FBSyxTQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5pbXBvcnQgeyBUaXBweVNlcnZpY2UgfSBmcm9tICcuL1RpcHB5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAnW2FwcFRpcHB5XSdcbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3RpcHB5T3B0aW9ucycpIHB1YmxpYyB0aXBweU9wdGlvbnM6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHRpcHB5RGlyZWN0aXZlU2VydmljZTogVGlwcHlTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHRpcHB5SW5zdGFuY2UgPSB0aXBweSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMudGlwcHlPcHRpb25zIHx8IHt9LCB0cnVlKTtcblxuICAgIHRoaXMudGlwcHlEaXJlY3RpdmVTZXJ2aWNlLnNldFRpcHB5U3RhdGUodGhpcy50aXBweU9wdGlvbnMubmFtZSwgdGlwcHlJbnN0YW5jZS50b29sdGlwc1swXSk7XG4gIH1cbn1cbiJdfQ==