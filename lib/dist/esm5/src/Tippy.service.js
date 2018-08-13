/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var TippyService = /** @class */ (function () {
    function TippyService() {
        this._tippyTooltipStates = new Map();
        this.tippyTooltipStates = new BehaviorSubject(new Map());
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ TippyService.ngInjectableDef = i0.defineInjectable({ factory: function TippyService_Factory() { return new TippyService(); }, token: TippyService, providedIn: "root" });
    return TippyService;
}());
export { TippyService };
if (false) {
    /** @type {?} */
    TippyService.prototype._tippyTooltipStates;
    /** @type {?} */
    TippyService.prototype.tippyTooltipStates;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwcHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRpcHB5LyIsInNvdXJjZXMiOlsic3JjL1RpcHB5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OzttQ0FNUCxJQUFJLEdBQUcsRUFBRTtrQ0FDbEIsSUFBSSxlQUFlLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7Ozs7OztJQUVuRCxvQ0FBYTs7Ozs7SUFBYixVQUFjLElBQUksRUFBRSxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBRUQsb0NBQWE7Ozs7SUFBYixVQUFjLElBQUk7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUN2Rjs7OztJQUVELG9DQUFhOzs7SUFBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7S0FDakM7Ozs7O0lBRUQsZ0NBQVM7Ozs7SUFBVCxVQUFVLElBQUk7UUFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekQ7S0FDRjs7Z0JBeEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt1QkFMRDs7U0FNYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRpcHB5U2VydmljZSB7XG4gIHByaXZhdGUgX3RpcHB5VG9vbHRpcFN0YXRlcyA9IG5ldyBNYXAoKTtcbiAgdGlwcHlUb29sdGlwU3RhdGVzID0gbmV3IEJlaGF2aW9yU3ViamVjdChuZXcgTWFwKCkpO1xuXG4gIHNldFRpcHB5U3RhdGUobmFtZSwgc3RhdGUpOiB2b2lkIHtcbiAgICB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuc2V0KG5hbWUsIHN0YXRlKTtcbiAgICB0aGlzLnRpcHB5VG9vbHRpcFN0YXRlcy5uZXh0KHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcyk7XG4gIH1cblxuICBnZXRUaXBweVN0YXRlKG5hbWUpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuaGFzKG5hbWUpID8gdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmdldChuYW1lKSA6IG51bGw7XG4gIH1cblxuICBnZXRBbGxUaXBwaWVzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcztcbiAgfVxuXG4gIGhpZGVUaXBweShuYW1lKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5oYXMobmFtZSkpIHtcbiAgICAgIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5nZXQobmFtZSkucG9wcGVyLl90aXBweS5oaWRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=