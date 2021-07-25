import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CanvasService } from './canvasUtils/canvas.service';
import { MouseService } from './services/mouse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private readonly canvasService: CanvasService,
    private readonly mouseService: MouseService
  ) {
    this.mouseService.mouseCoordinates.subscribe(console.log);
    this.canvasService.createNewCanvasElement('test');
  }
}
