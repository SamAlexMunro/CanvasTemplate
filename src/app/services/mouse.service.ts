import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { WindowEvent } from './../enums/window-events';

@Injectable({ providedIn: 'root' })
export class MouseService {
  readonly mouseCoordinates$: Observable<{ x: number; y: number }> =
    fromEvent<MouseEvent>(document, WindowEvent.MOUSE_MOVE).pipe(
      throttleTime(50),
      map((event) => ({ x: event.clientX, y: event.clientY }))
    );
}
