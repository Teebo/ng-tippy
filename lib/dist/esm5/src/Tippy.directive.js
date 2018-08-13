/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import tippy from 'tippy.js';
import { TippyService } from './Tippy.service';
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
export { TippyDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwcHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGlwcHkvIiwic291cmNlcyI6WyJzcmMvVGlwcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUM3QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBVTdDLHdCQUFvQixFQUFjLEVBQVUscUJBQW1DO1FBQTNELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSwwQkFBcUIsR0FBckIscUJBQXFCLENBQWM7eUJBSG5FLElBQUk7NkJBQ0EsSUFBSTtRQUdsQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztLQUNkOzs7O0lBRU0saUNBQVE7Ozs7O1FBQ2IsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xGLDRCQUFRLGNBQUksRUFBRSwwQ0FBa0IsQ0FBdUI7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3ZEO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzlFOzs7OztJQUdJLG9DQUFXOzs7O1FBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7OztnQkExQmhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBTjZDLFVBQVU7Z0JBRS9DLFlBQVk7OzsrQkFNbEIsS0FBSyxTQUFDLGNBQWM7O3lCQVJ2Qjs7U0FPYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5pbXBvcnQgeyBUaXBweVNlcnZpY2UgfSBmcm9tICcuL1RpcHB5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwVGlwcHldJ1xufSlcbmV4cG9ydCBjbGFzcyBUaXBweURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCd0aXBweU9wdGlvbnMnKSBwdWJsaWMgdGlwcHlPcHRpb25zOiBhbnk7XG4gIHRpcHB5TmFtZSA9IG51bGw7XG4gIHRpcHB5SW5zdGFuY2UgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdGlwcHlEaXJlY3RpdmVTZXJ2aWNlOiBUaXBweVNlcnZpY2UpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgdGlwcHlJbnN0YW5jZSA9IHRpcHB5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy50aXBweU9wdGlvbnMgfHwge30sIHRydWUpO1xuICAgIGNvbnN0IHsgbmFtZSwgc2hvdWxkT2JzZXJ2ZVN0YXRlIH0gPSB0aGlzLnRpcHB5T3B0aW9ucztcbiAgICB0aGlzLnRpcHB5TmFtZSA9IG5hbWU7XG4gICAgdGhpcy50aXBweUluc3RhbmNlID0gdGlwcHlJbnN0YW5jZTtcblxuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQgJiYgc2hvdWxkT2JzZXJ2ZVN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbmFtZSBpcyByZXF1aXJlZCBmb3IgdGhlIHRvb2x0aXAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXBweURpcmVjdGl2ZVNlcnZpY2Uuc2V0VGlwcHlTdGF0ZSh0aGlzLnRpcHB5TmFtZSwgdGhpcy50aXBweUluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy50aXBweURpcmVjdGl2ZVNlcnZpY2Uuc2V0VGlwcHlTdGF0ZSh0aGlzLnRpcHB5TmFtZSwgdGhpcy50aXBweUluc3RhbmNlKTtcbiAgfVxufVxuIl19