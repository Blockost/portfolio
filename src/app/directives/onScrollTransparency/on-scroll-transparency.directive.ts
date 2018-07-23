import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appOnScrollTransparency]'
})
export class OnScrollTransparencyDirective implements OnInit {
  @Input() scrollDistance!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen('window', 'scroll', () => {
      this.debounce(this.applyTransparency.apply(this), 200, true);
    });
  }

  private applyTransparency() {
    if (document.documentElement.scrollTop >= this.scrollDistance) {
      this.renderer.removeClass(this.el.nativeElement, 'navbar-transparent');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'navbar-transparent');
    }
  }

  /**
   * Returns a function, that, as long as it continues to be invoked, will not be triggered.
   * The function will be called after it stops being called for N milliseconds.
   * @param fn the function to be called
   * @param wait time to wait before invoking the function (in ms)
   * @param immediate trigger the function on the leading edge. Otherwise, on the trailing edge.
   */
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
