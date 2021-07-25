import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [CanvasComponent],
  imports: [CommonModule],
  exports: [CanvasComponent],
})
export class CanvasModule {}
