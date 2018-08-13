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
export { TippyDirective };
if (false) {
    /** @type {?} */
    TippyDirective.prototype.tippyOptions;
    /** @type {?} */
    TippyDirective.prototype.el;
    /** @type {?} */
    TippyDirective.prototype.tippyDirectiveService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwcHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGlwcHkvIiwic291cmNlcyI6WyJzcmMvVGlwcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFTN0Msd0JBQW9CLEVBQWMsRUFBVSxxQkFBbUM7UUFBM0QsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBYztRQUM3RSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztLQUNkOzs7O0lBRU0saUNBQVE7Ozs7O1FBQ2IsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Z0JBZC9GLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQVBrQyxVQUFVO2dCQUVwQyxZQUFZOzs7K0JBT2xCLEtBQUssU0FBQyxjQUFjOzt5QkFUdkI7O1NBUWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcbmltcG9ydCB7IFRpcHB5U2VydmljZSB9IGZyb20gJy4vVGlwcHkuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICdbYXBwVGlwcHldJ1xufSlcbmV4cG9ydCBjbGFzcyBUaXBweURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndGlwcHlPcHRpb25zJykgcHVibGljIHRpcHB5T3B0aW9uczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdGlwcHlEaXJlY3RpdmVTZXJ2aWNlOiBUaXBweVNlcnZpY2UpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgdGlwcHlJbnN0YW5jZSA9IHRpcHB5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy50aXBweU9wdGlvbnMgfHwge30sIHRydWUpO1xuXG4gICAgdGhpcy50aXBweURpcmVjdGl2ZVNlcnZpY2Uuc2V0VGlwcHlTdGF0ZSh0aGlzLnRpcHB5T3B0aW9ucy5uYW1lLCB0aXBweUluc3RhbmNlLnRvb2x0aXBzWzBdKTtcbiAgfVxufVxuIl19