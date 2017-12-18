import {
  Directive,
  HostListener,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  Input
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appOnScrollTransparency]'
})
export class OnScrollTransparencyDirective implements OnInit {

  targetElement: ElementRef;
  @Input() scrollDistance: number;

  constructor(private el: ElementRef, private renderer: Renderer2,
    @Inject(DOCUMENT) document: any) {
    this.targetElement = el;
  }

  ngOnInit() {
    this.renderer.listen('window', 'scroll', (evt: any) => {
      this.debounce(this.applyTransparency.apply(this), 200, true);
    });
  }

  private applyTransparency(el: ElementRef) {
    if (document.documentElement.scrollTop >=this.scrollDistance) {
      this.renderer.removeClass(this.el.nativeElement, 'navbar-transparent');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'navbar-transparent');
    }
  }

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.

  private debounce(fn: Function, wait: number, immediate: boolean) {
    let timeout: any;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        if (!immediate) {
          fn.apply(this);
        }
      }, wait);
      if (immediate && !timeout) {
        fn.apply(this);
      }
    };
  }
}
