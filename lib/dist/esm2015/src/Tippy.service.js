/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class TippyService {
    constructor() {
        this._tippyTooltipStates = new Map();
        this.tippyTooltipStates = new BehaviorSubject(new Map());
    }
    /**
     * @param {?} name
     * @param {?} state
     * @return {?}
     */
    setTippyState(name, state) {
        this._tippyTooltipStates.set(name, state);
        this.tippyTooltipStates.next(this._tippyTooltipStates);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getTippyState(name) {
        return this._tippyTooltipStates.has(name) ? this._tippyTooltipStates.get(name) : null;
    }
    /**
     * @return {?}
     */
    getAllTippies() {
        return this._tippyTooltipStates;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    hideTippy(name) {
        if (this._tippyTooltipStates.has(name)) {
            this._tippyTooltipStates.get(name).popper._tippy.hide();
        }
    }
}
TippyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ TippyService.ngInjectableDef = i0.defineInjectable({ factory: function TippyService_Factory() { return new TippyService(); }, token: TippyService, providedIn: "root" });
if (false) {
    /** @type {?} */
    TippyService.prototype._tippyTooltipStates;
    /** @type {?} */
    TippyService.prototype.tippyTooltipStates;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlwcHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRpcHB5LyIsInNvdXJjZXMiOlsic3JjL1RpcHB5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLdkMsTUFBTTs7bUNBQzBCLElBQUksR0FBRyxFQUFFO2tDQUNsQixJQUFJLGVBQWUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O0lBRW5ELGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSztRQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFJO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDdkY7Ozs7SUFFRCxhQUFhO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztLQUNqQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBSTtRQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6RDtLQUNGOzs7WUF4QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRpcHB5U2VydmljZSB7XG4gIHByaXZhdGUgX3RpcHB5VG9vbHRpcFN0YXRlcyA9IG5ldyBNYXAoKTtcbiAgdGlwcHlUb29sdGlwU3RhdGVzID0gbmV3IEJlaGF2aW9yU3ViamVjdChuZXcgTWFwKCkpO1xuXG4gIHNldFRpcHB5U3RhdGUobmFtZSwgc3RhdGUpOiB2b2lkIHtcbiAgICB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuc2V0KG5hbWUsIHN0YXRlKTtcbiAgICB0aGlzLnRpcHB5VG9vbHRpcFN0YXRlcy5uZXh0KHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcyk7XG4gIH1cblxuICBnZXRUaXBweVN0YXRlKG5hbWUpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuaGFzKG5hbWUpID8gdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmdldChuYW1lKSA6IG51bGw7XG4gIH1cblxuICBnZXRBbGxUaXBwaWVzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcztcbiAgfVxuXG4gIGhpZGVUaXBweShuYW1lKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5oYXMobmFtZSkpIHtcbiAgICAgIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5nZXQobmFtZSkucG9wcGVyLl90aXBweS5oaWRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=