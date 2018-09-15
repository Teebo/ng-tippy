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
if (false) {
    /** @type {?} */
    TippyDirective.prototype.tippyOptions;
    /** @type {?} */
    TippyDirective.prototype.tippyName;
    /** @type {?} */
    TippyDirective.prototype.tippyInstance;
    /** @type {?} */
    TippyDirective.prototype.el;
    /** @type {?} */
    TippyDirective.prototype.tippyDirectiveService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwcHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGlwcHkvIiwic291cmNlcyI6WyJzcmMvVGlwcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUM3QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLL0MsTUFBTTs7Ozs7SUFNSixZQUNVLElBQ0E7UUFEQSxPQUFFLEdBQUYsRUFBRTtRQUNGLDBCQUFxQixHQUFyQixxQkFBcUI7eUJBTG5CLElBQUk7NkJBQ0EsSUFBSTtRQU1sQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztLQUNkOzs7O0lBRU0sUUFBUTs7UUFDYixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQzs7UUFDN0MsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUVuQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztTQUN2RDtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FDdEMsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO1NBQ0g7Ozs7O0lBR0ksV0FBVztRQUNoQixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUN0QyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7Ozs7WUFuQ0wsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBTjZDLFVBQVU7WUFFL0MsWUFBWTs7OzJCQU1sQixLQUFLLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHsgVGlwcHlTZXJ2aWNlIH0gZnJvbSAnLi9UaXBweS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcFRpcHB5XSdcbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgndGlwcHlPcHRpb25zJylcbiAgcHVibGljIHRpcHB5T3B0aW9uczogYW55O1xuICB0aXBweU5hbWUgPSBudWxsO1xuICB0aXBweUluc3RhbmNlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGlwcHlEaXJlY3RpdmVTZXJ2aWNlOiBUaXBweVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHRpcHB5T3B0aW9ucyA9IHRoaXMudGlwcHlPcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHRpcHB5SW5zdGFuY2UgPSB0aXBweSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRpcHB5T3B0aW9ucywgdHJ1ZSk7XG4gICAgdGhpcy50aXBweUluc3RhbmNlID0gdGlwcHlJbnN0YW5jZTtcblxuICAgIGlmICh0aXBweU9wdGlvbnMubmFtZSA9PT0gdW5kZWZpbmVkICYmIHRpcHB5T3B0aW9ucy5zaG91bGRPYnNlcnZlU3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBuYW1lIGlzIHJlcXVpcmVkIGZvciB0aGUgdG9vbHRpcCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpcHB5RGlyZWN0aXZlU2VydmljZS5zZXRUaXBweVN0YXRlKFxuICAgICAgICB0aGlzLnRpcHB5TmFtZSxcbiAgICAgICAgdGhpcy50aXBweUluc3RhbmNlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnRpcHB5RGlyZWN0aXZlU2VydmljZS5zZXRUaXBweVN0YXRlKFxuICAgICAgdGhpcy50aXBweU5hbWUsXG4gICAgICB0aGlzLnRpcHB5SW5zdGFuY2VcbiAgICApO1xuICB9XG59XG4iXX0=