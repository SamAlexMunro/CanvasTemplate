import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { WindowEvent } from './../enums/window-events';

@Injectable({
  providedIn: 'root',
})
export class MouseService {
  mouseCoordinates = new BehaviorSubject({ x: 0, y: 0 });
  constructor() {
    this.setMouseCoordinates();
  }

  private setMouseCoordinates() {
    fromEvent<MouseEvent>(document, WindowEvent.MOUSE_MOVE)
      .pipe(throttleTime(50))
      .subscribe((event: MouseEvent) => {
        this.mouseCoordinates.next({ x: event.clientX, y: event.clientY });
      });
  }
}
