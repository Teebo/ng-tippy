import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TippyService {
  private _tippyTooltipStates = new Map();
  tippyTooltipStates = new BehaviorSubject(new Map());

  setTippyState(name, state): void {
    this._tippyTooltipStates.set(name, state);
    this.tippyTooltipStates.next(this._tippyTooltipStates);
  }

  getTippyState(name): any {
    return this._tippyTooltipStates.has(name) ? this._tippyTooltipStates.get(name) : null;
  }

  getAllTippies(): any {
    return this._tippyTooltipStates;
  }

  hideTippy(name): void {
    if (this._tippyTooltipStates.has(name)) {
      this._tippyTooltipStates.get(name).popper._tippy.hide();
    }
  }
}
