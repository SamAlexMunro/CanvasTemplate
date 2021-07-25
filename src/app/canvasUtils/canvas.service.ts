import { Injectable, RendererFactory2 } from '@angular/core';
import { HtmlAttribute } from '../enums/html-attributes';
import { EHtmlElement } from './../enums/html-element';

const CANVAS_DEFAULT_CLASS = 'canvas-boiler-plate';

@Injectable({ providedIn: 'root' })
export class CanvasService {
  renderer = this.rendererFactory2.createRenderer(null, null);
  constructor(private readonly rendererFactory2: RendererFactory2) {}

  createNewCanvasElement(id = ''): HTMLCanvasElement | undefined {
    const canvasElement = this.renderer.createElement(EHtmlElement.CANVAS);
    const appRoot = document.getElementsByTagName(EHtmlElement.APP_ROOT)[0];
    this.renderer.setAttribute(canvasElement, HtmlAttribute.ID, id);
    this.renderer.addClass(canvasElement, CANVAS_DEFAULT_CLASS);
    if (!appRoot) {
      console.error('app-root element was not found!');
      return;
    }
    this.renderer.appendChild(appRoot, canvasElement);
    return canvasElement;
  }

  // Unlikely to be used but use as a template if required to add prototype methods to a given canvas element.
  // canvasElement.prototype.removeCanvasElement = () => {};
}
