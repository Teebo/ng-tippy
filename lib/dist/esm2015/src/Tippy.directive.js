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
        const tippyInstance = tippy(this.el.nativeElement, this.tippyOptions || {}, true);
        const { name, shouldObserveState } = this.tippyOptions;
        this.tippyName = name;
        this.tippyInstance = tippyInstance;
        if (name === undefined && shouldObserveState) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwcHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGlwcHkvIiwic291cmNlcyI6WyJzcmMvVGlwcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUM3QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLL0MsTUFBTTs7Ozs7SUFLSixZQUFvQixFQUFjLEVBQVUscUJBQW1DO1FBQTNELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSwwQkFBcUIsR0FBckIscUJBQXFCLENBQWM7eUJBSG5FLElBQUk7NkJBQ0EsSUFBSTtRQUdsQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztLQUNkOzs7O0lBRU0sUUFBUTs7UUFDYixNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEYsTUFBTSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3ZEO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzlFOzs7OztJQUdJLFdBQVc7UUFDaEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7OztZQTFCaEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBTjZDLFVBQVU7WUFFL0MsWUFBWTs7OzJCQU1sQixLQUFLLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHsgVGlwcHlTZXJ2aWNlIH0gZnJvbSAnLi9UaXBweS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcFRpcHB5XSdcbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgndGlwcHlPcHRpb25zJykgcHVibGljIHRpcHB5T3B0aW9uczogYW55O1xuICB0aXBweU5hbWUgPSBudWxsO1xuICB0aXBweUluc3RhbmNlID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHRpcHB5RGlyZWN0aXZlU2VydmljZTogVGlwcHlTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHRpcHB5SW5zdGFuY2UgPSB0aXBweSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMudGlwcHlPcHRpb25zIHx8IHt9LCB0cnVlKTtcbiAgICBjb25zdCB7IG5hbWUsIHNob3VsZE9ic2VydmVTdGF0ZSB9ID0gdGhpcy50aXBweU9wdGlvbnM7XG4gICAgdGhpcy50aXBweU5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGlwcHlJbnN0YW5jZSA9IHRpcHB5SW5zdGFuY2U7XG5cbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkICYmIHNob3VsZE9ic2VydmVTdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIG5hbWUgaXMgcmVxdWlyZWQgZm9yIHRoZSB0b29sdGlwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlwcHlEaXJlY3RpdmVTZXJ2aWNlLnNldFRpcHB5U3RhdGUodGhpcy50aXBweU5hbWUsIHRoaXMudGlwcHlJbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudGlwcHlEaXJlY3RpdmVTZXJ2aWNlLnNldFRpcHB5U3RhdGUodGhpcy50aXBweU5hbWUsIHRoaXMudGlwcHlJbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==