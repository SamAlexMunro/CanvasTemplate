import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith, throttleTime } from 'rxjs/operators';
import { WindowEvent } from './../enums/window-events';

@Injectable({ providedIn: 'root' })
export class ResizeService {
  resize$: Observable<{ width: number; height: number }> = fromEvent(
    window,
    WindowEvent.RESIZE
  ).pipe(
    startWith(window.innerWidth),
    throttleTime(50),
    map(() => ({ width: window.innerWidth, height: window.innerHeight }))
  );
}
