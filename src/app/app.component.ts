import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CanvasService } from './canvasUtils/canvas.service';
import { CanvasContext } from './enums/canvas-context';
import { MouseService } from './services/mouse.service';
import { ResizeService } from './services/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  canvasElement = this.canvasService.createNewCanvasElement('');
  canvasRenderer = this.canvasElement.getContext(
    CanvasContext.TWO_DIMENSIONAL
  ) as CanvasRenderingContext2D;

  constructor(
    private readonly canvasService: CanvasService,
    private readonly mouseService: MouseService,
    private readonly resizeService: ResizeService
  ) {
    // Mouse coordinates {x: 0, y: 0}, remove if not needed
    this.mouseService.mouseCoordinates$.subscribe(() => {
      // Use mouse coords
    });

    if (!this.canvasRenderer) return;
    this.canvasResizeListener();
    this.animate();
  }

  private canvasResizeListener(): void {
    /**
     * If a canvas isn't persistant throughout apps lifetime add unsubscription logic
     * recommend takeUntil or async pipe
     */
    this.resizeService.resize$.subscribe((event) => {
      this.canvasElement.width = event.width;
      this.canvasElement.height = event.height;
      this.draw();
    });
  }

  private draw(): void {
    // Drawing logic
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));
  }
}
