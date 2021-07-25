import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { WindowEvent } from './../enums/window-events';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  resize$ = fromEvent(window, WindowEvent.RESIZE).pipe(
    throttleTime(50),
    map(() => window.innerWidth)
  );
}
