import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CanvasService } from './canvasUtils/canvas.service';
import { MouseService } from './services/mouse.service';
import { ResizeService } from './services/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private readonly canvasService: CanvasService,
    private readonly mouseService: MouseService,
    private readonly resizeService: ResizeService
  ) {
    this.mouseService.mouseCoordinates.subscribe(console.log);
    this.canvasService.createNewCanvasElement('test');
    this.resizeService.resize$.subscribe(console.log);
  }
}
