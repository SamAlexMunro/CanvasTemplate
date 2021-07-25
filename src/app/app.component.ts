import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CanvasService } from './canvasUtils/canvas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private readonly canvasService: CanvasService) {
    this.canvasService.createNewCanvasElement('test');
  }
}
