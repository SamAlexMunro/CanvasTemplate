import { Injectable, RendererFactory2 } from '@angular/core';
import { HtmlAttribute } from '../enums/html-attributes';
import { EHtmlElement } from './../enums/html-element';

const CANVAS_DEFAULT_CLASS = 'canvas-boiler-plate';

@Injectable({ providedIn: 'root' })
export class CanvasService {
  private readonly renderer = this.rendererFactory2.createRenderer(null, null);

  constructor(private readonly rendererFactory2: RendererFactory2) {}

  createNewCanvasElement(id = ''): HTMLCanvasElement {
    const canvasElement = this.renderer.createElement(EHtmlElement.CANVAS);
    const appRoot = document.getElementsByTagName(EHtmlElement.APP_ROOT)[0];
    this.renderer.setAttribute(canvasElement, HtmlAttribute.ID, id);
    this.renderer.addClass(canvasElement, CANVAS_DEFAULT_CLASS);

    if (!appRoot) {
      console.error('app-root element was not found!');
      return canvasElement;
    }

    this.renderer.appendChild(appRoot, canvasElement);
    return canvasElement;
  }

  // Would reccomend adding protoype properties if multiple canvas's are being created.
  // canvasElement.prototype.methodName = () => { logic... };
}
